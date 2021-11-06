//* CRUD

const mongo = (Model) => {
  const get = async (req) => {
    try {
      const query = req.query;
      const result = await Model.aggregate(query);
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const create = async (req) => {
    try {
      req.body._createdDate = new Date();
      req.body._updatedDate = new Date();
      const result = await Model.create(req.body);
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const update = async (req) => {
    req.body._updatedDate = new Date();
    try {
      const query = {
        ...req.query,
      };
      if (req.body._id) {
        query._id = req.body._id;
      }
      const result = await Model.findOneAndUpdate(query, req.body, {
        new: true,
      });
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const upsert = async (req) => {
    req.body._updatedDate = new Date();
    try {
      const result = await Model.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        {
          upsert: true,
          new: true,
        }
      );
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const bulkUpsert = async (req) => {
    req.body._updatedDate = new Date();
    try {
      const arrBody = req.body !== undefined ? req.body : [];
      await Promise.all(
        arrBody.forEach(async (item) => {
          await Model.updateOne({ _id: item._id }, item, { upsert: true });
        })
      );
      return {
        upserted: arrBody.length
      };
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const remove = async (req) => {
    try {
      const query = req.query;
      const result = await Model.remove(query, { justOne: true });
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const isExist = async (req, res) => {
    try {
      const query = req.query;
      const count = await Model.countDocuments(query);
      return count >= 1;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  return {
    get,
    create,
    update,
    upsert,
    bulkUpsert,
    remove,
    isExist,
  };
};

module.exports = mongo;
