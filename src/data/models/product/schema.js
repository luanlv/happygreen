let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  category: {type: [], default: []},
  slug: { type:String, required:true, unique: true, index: true},
  title: {type: String, default: ''},
  price: {type: Number, default: 0},
  donvi: {type: String, default: 'KG'},
  coverUrl: {type: String, default: '/assets/images/placeholders/848x480.png'},
  body: {type: String, default: ''},
  view: {type: Number, default: 0},
  created_at: {type: Date, default: Date.now},
});

let model = mongoose.model('Product', schema);

module.exports = model;

// get ( news )

module.exports.getProducts = (root, {page}) => {

  return new Promise((resolve, reject) => {
    model.count({}).exec((err, count) => {
      if(err) return reject(err)
      model.find({}).sort({created_at: -1}).skip((page-1)*16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count/16) + 1,
          data: res
        });
      });

    })
  });
};

module.exports.getNewsInCategory = (root, {page, slug}) => {

  return new Promise((resolve, reject) => {

    model.count({category: slug}).exec((err, count) => {
      if(err) return reject(err)
      model.find({category: slug}).sort({created_at: -1}).skip((page-1)*16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count/16) + 1,
          data: res
        });
      });

    })
  });
};


module.exports.productByCategory = (root, {page, slug}) => {

  return new Promise((resolve, reject) => {

    model.count({category: slug}).exec((err, count) => {
      if(err) return reject(err)
      model.find({category: slug}).sort({created_at: -1}).skip((page-1)*16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count/16) + 1,
          data: res
        });
      });

    })
  });
};



module.exports.getOneProduct = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    model.findOne({slug: slug}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllProduct = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({created_at: -1}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.get5RecentProduct = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({created_at: -1}).limit(6).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.getAllProductsByCategory = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    model.find({category: slug}).sort({created_at: -1}).limit(5).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// get ( food )

module.exports.getFoodNews = (root, {page}) => {
  let listCategoryInNews = [
    'mon-ngon-tu-com',
    'cach-lam-mon-ngon-tai-nha'
  ]
  return new Promise((resolve, reject) => {
    model.count({category: {$in: listCategoryInNews}}).exec((err, count) => {
      if(err) return reject(err)
      model.find({category: {
        $in: listCategoryInNews
      }}).sort({created_at: -1}).skip((page-1)*16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count/16) + 1,
          data: res
        });
      });

    })
  });
};

// mutation

module.exports.newPost = (root, {category, slug, title, coverUrl, description, body, tags}) => {
  let data = {
    category,
    slug,
    title,
    coverUrl,
    description,
    body,
    tags
  }
  return new Promise((resolve, reject) => {
    model.create(data, (err, res) => {
      err ? reject(err): resolve(res);
    });
  });

};

module.exports.getProductRelative = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.aggregate([
      { "$sample" : {
        size: 6
      }}
      ]).exec((err, listPost) => {
        if (err)
          reject(err)
        else
          resolve(listPost)
      })
  })
}
