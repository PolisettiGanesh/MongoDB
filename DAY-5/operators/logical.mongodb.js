use('ecommerce');
// db.products.find();

// db.products.find(
//   {$and :[{category:"beauty"},{price:{$lt:12.99}}]},
//   {price:1,title:1,category:1}
// );

// db.products.find({ $and: [{category:'beauty'}, {price:{$lt:19.99}}] }, { price: 1, category: 1, title: 1 });

//! It also works like same by default mongodb use $and operator for this

// db.products.find(
//   {  category:'beauty', price:{$lt:19.99} } ,{ price: 1, category: 1, title: 1 });

// db.products.find(
//   { $or: [{ category: 'beauty' }, { price: { $lt: 19.99 } }] },
//   { price: 1, category: 1, title: 1 }
// );


// db.products.find(
//   { $or: [{ category: 'beauty' }, { price: {$not:{ $lt: 19.99 }} }] },
//   { price: 1, category: 1, title: 1 }
// );


db.products.find(
 {
  $nor:[
    {category:'beauty'},
    {price:{$gt:12.99}}
  ]
 },
  { price: 1, category: 1, title: 1 }
);
