class MongoBase {
  create = async (model, data) => {
    return model.create(data);
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
}

const mongoBase = new MongoBase();
module.exports = mongoBase;
