const express = require("express");
const router = express.Router();
const Users = require("../controllers/Users");

router.get("/getUsers", Users.getUsers);
router.get("/getRoles", Users.getRoles);
router.get("/isLogin", Users.isLogin);
router.get("/isExist", Users.isExist);
router.post("/resetPassword", Users.resetPassword);
router.post("/save", Users.save);
router.post("/login", Users.login);
router.put("/setRoles", Users.setRoles);
router.delete("/remove", Users.remove);

module.exports = router;
