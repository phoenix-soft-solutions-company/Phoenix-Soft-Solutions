class MongoBase {
  create = async (model, data) => {
    return model.create(data);
  };

  findAll = async (model) => {
    return model.find({});
  };

  findOne = async (model, field, projection = null) => {
    if (projection) {
      projection.runValidators = true;
    }
    return model.findOne(field, projection);
  };

  update = async (model, filter, updateDetails) => {
    try {
      return await model.findOneAndUpdate(filter, updateDetails, { new: true });
    } catch (error) {
      throw error;
    }
  };

  findById = async (model, id) => {
    try {
      return await model.findById(id);
    } catch (error) {
      throw error;
    }
  };

  findByIdAndDelete = async (model, id) => {
    try {
      return await model.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  };
}

const mongoBase = new MongoBase();
module.exports = mongoBase;
