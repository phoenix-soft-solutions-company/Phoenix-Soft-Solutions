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
}

const mongoBase = new MongoBase();
module.exports = mongoBase;
