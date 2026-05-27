use('ecommerce');

// db.products.find();

// db.products.find(
//     {},
//     {title:1,price:1,category:1}
// )


// db.products.find(
//     {price:12.99},
//     {title:1,price:1,category:1}
// )


// db.products.find(
//     {price: {$gt: 12.99}},
//     {title:1,price:1,category:1}
// )

// db.products.find(
//     {price:{ $gt: 499}},
//     {title:1,price:1,category:1}
// )

// db.products.find(
//     {price:{ $lt: 499}},
//     {title:1,price:1,category:1}
// )

// db.products.find(
//     {price:{ $lte: 499}},
//     {title:1,price:1,category:1}
// )

// db.products.find(
//     {price:{ $gte: 499}},
//     {title:1,price:1,category:1}
// )

// db.products.find(
//     {price:{ $eq: 499.99}},
//     {title:1,price:1,category:1}
// )

db.products.find(
    {price:{ $ne: 499.99}},
    {title:1,price:1,category:1}
)
