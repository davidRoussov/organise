import mongoose from 'mongoose';

const F3Schema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  },
  items: [
    {
      itemTitle: String,
      itemDetails: String
    }
  ]
});

F3Schema.statics.getCategories = userID => new Promise((resolve, reject) => {
  F3.find({ userID }, (error, results) => {
    if(error) {
      console.error('Unable to execute Mongo query');
      reject(error);
    } else {
      const pruned = results.map(category => ({
        id: category._id,
        categoryName: category.categoryName,
        items: category.items
      }));
      resolve(pruned);
    }
  });
});

F3Schema.statics.createCategory = (userID, categoryName) => new Promise((resolve, reject) => {
  const f3 = new F3({
    userID,
    categoryName,
    items: []
  });
  f3.save(error => {
    if(error) {
      console.error('Unable to execute Mongo query');
      reject(error);
    } else {
      resolve();
    }
  });
});

const F3 = mongoose.model('F3', F3Schema);
export default F3;