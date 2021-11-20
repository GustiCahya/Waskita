const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const Users = require("../models/Users");
const parseJsonQuery = require("../utils/parseJsonQuery");
const { pagination } = require("../utils/pagination");

//* Helper
const generateAccessToken = (userJWT) => {
  return jwt.sign(userJWT, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
const createToken = (account) => {
  const userJWT = {
    email: account.email,
    fullName: account.fullName,
    roles: account.roles,
  };
  const accessToken = generateAccessToken(userJWT);
  return { accessToken };
};

const save = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    const fullName = req.body.fullName;
    const password = req.body.password;
    const roles = req.body.roles;
    // Check if user exist
    const user = await Users.findOne({
      email: new RegExp(email, "gi"),
    });
    if (user) {
      return res.status(400).send({
        success: false,
        message: "Akun sudah terdaftar",
      });
    }
    // Register user
    const hashedPassword = await bcrypt.hash(password, 10);
    const saveUser = {
      email: email,
      fullName: fullName,
      password: hashedPassword,
      $addToSet: { roles: roles },
      $setOnInsert: { _id: uuid.v4() },
      _createdDate: new Date(),
      _updatedDate: new Date(),
    };
    const createdUser = await Users.findOneAndUpdate(
      { email: saveUser.email },
      saveUser,
      { upsert: true, new: true }
    );
    res.status(201).send({
      success: true,
      result: {
        userId: createdUser.userId,
        roles: createdUser.roles,
      },
      message: "Daftar berhasil !",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    // Check if user not exist
    const user = await Users.findOne({
      email: new RegExp(email, "gi"),
    });
    if (user == null) {
      return res.status(400).send({
        success: false,
        message: "Tidak dapat menemukan user",
      });
    }
    // Validate password
    if (await bcrypt.compare(password, user.password)) {
      // Generate Token
      const roles = user.roles;
      const account = {
        userId: user._id,
        fullName: user.fullName,
        email: user.email,
        roles: roles,
      };
      const key = await createToken(account);
      res.send({
        success: true,
        result: {
          userId: account.userId,
          key,
          roles,
        },
        message: "Sukses Login",
      });
    } else {
      res.status(401).send({
        success: false,
        message: "Maaf password yang anda masukan tidak sesuai",
      });
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const isLogin = (req, res) => {
  try {
    const token = req.query.token;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        return res.status(403).send({
          success: false,
          message: "Harap login dahulu",
        });
      }
      res.json({
        success: true,
        result: true,
        message: "",
      });
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const token = req.body.token;
    const email = req.body.email;
    const password = req.body.password;
    const oldPassword = req.body.oldPassword;
    const hashPassword = await bcrypt.hash(password, 10);
    if (oldPassword) {
      // Reset Password using old password
      const result = await Users.findOne({ email });
      const isVerified = await bcrypt.compare(oldPassword, result.password);
      if (isVerified) {
        const result = await Users.updateOne(
          { email },
          { password: hashPassword, _updatedDate: new Date() }
        );
        res.json({
          success: true,
          result,
          message: "Password berhasil dirubah",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Password lama anda salah",
        });
      }
    } else {
      // Reset Password using token
      jwt.verify(
        token,
        process.env.RESET_PASSWORD_TOKEN_SECRET,
        async (err) => {
          if (err) {
            return res.status(403).json({
              success: false,
              result: err,
              message: err.message,
            });
          }
          const result = await Users.updateOne(
            { email },
            { password: hashPassword, _updatedDate: new Date() }
          );
          res.json({
            success: true,
            result,
          });
        }
      );
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      result: err,
      message: err.message,
    });
  }
};

const isExist = async (req, res) => {
  try {
    const query = parseJsonQuery(req.query.jsonQuery);
    const count = await Users.countDocuments(query);
    res.json({
      success: true,
      result: count >= 1,
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const query = parseJsonQuery(req.query.jsonQuery);
    const page = req.query.page;
    const limit = req.query.limit;
    const { result, pagesLength } = await pagination(Users, query, page, limit);
    const users = result;
    res.json({
      success: true,
      result: users,
      pagesLength,
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getRoles = async (req, res) => {
  try {
    const query = req.query;
    const user = await Users.findOne(query);
    res.json({
      success: true,
      result: user.roles,
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const setRoles = async (req, res) => {
  try {
    const body = req.body;
    const _id = body._id;
    const roles = body.roles;
    const user = await Users.findOneAndUpdate(
      { _id },
      {
        roles,
        _updatedDate: new Date(),
      }
    );
    res.json({
      success: true,
      result: {
        _id: user._id,
        email: user.email,
        roles: user.roles,
      },
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    const query = req.query;
    const _id = query._id;
    const user = await Users.findByIdAndDelete(_id);
    res.json({
      success: true,
      result: {
        _id: user._id,
        email: user.email,
        roles: user.roles,
      },
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  save,
  login,
  resetPassword,
  isLogin,
  isExist,
  getUsers,
  getRoles,
  setRoles,
  remove,
};
