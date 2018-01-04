import mongoose from 'mongoose';

const F2CategorySchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  }
});

F2CategorySchema.statics.delete = categoryID => new Promise((resolve, reject) => {
  F2Category.find({ _id: categoryID }).remove(error => {
    if(error) {
      console.error('Unable to execute Mongo query');
      reject(error);
    } else {
      resolve();
    }
  });
});

F2CategorySchema.statics.get = userID => new Promise((resolve, reject) => {
  F2Category.find({ userID }, (err, categories) => {
    if(err) {
      console.error('Unable to execute Mongo query');
      console.error(err);
      reject('A database error occurred getting F2 categories');
    } else {
      const pruned = categories.map(category => ({
        id: category._id,
        categoryName: category.categoryName
      }));

      resolve(pruned);
    }
  });
});

F2CategorySchema.statics.save = (userID, categoryName) => new Promise((resolve, reject) => {
  const f2Category = new F2Category({
    userID,
    categoryName
  });
  f2Category.save((err, results) => {
    if(err) {
      console.error('Unable to execute mongo query');
      console.error(err);
      reject('A database error occurred creating the new category');
    } else {
      resolve();
    }
  });
});

const F2Category = mongoose.model('F2Category', F2CategorySchema);
export default F2Category;