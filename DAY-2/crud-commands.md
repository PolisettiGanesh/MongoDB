

# MongoDB Shell Basic Commands

Before using these commands:

```
Start MongoDB Server
```

Run in **CMD (Administrator)**

```
net start MongoDB
```

Then open **MongoDB Shell**

```
mongosh
```

Now you are connected to MongoDB.

---

# 1️⃣ show dbs

Purpose:

```
Displays all databases in MongoDB
```

Command:

```
show dbs
```

Example output:

```
admin
config
local
school
shop
```

Important note:

```
A database appears here only after data is inserted.
```

---

# 2️⃣ use databaseName

Purpose:

```
Switch to a database or create a new database
```

Command:

```
use school
```

Output:

```
switched to db school
```

Important rule:

```
Database is created only when data is inserted.
```

---

# 3️⃣ db

Purpose:

```
Shows the current database
```

Command:

```
db
```

Example output:

```
school
```

Meaning:

```
You are currently working inside "school" database
```

---

# 4️⃣ show collections

Purpose:

```
Shows all collections inside the current database
```

Command:

```
show collections
```

Example output:

```
students
teachers
courses
```

---

# 5️⃣ db.createCollection()

Purpose:

```
Creates a new collection manually
```

Command:

```
db.createCollection("students")
```

Output:

```
{ ok: 1 }
```

Now collection created:

```
students
```

---

# 6️⃣ db.collection.insertOne()

Purpose:

```
Insert one document into collection
```

Command:

```
db.students.insertOne({
 name: "Manas",
 age: 21,
 city: "Delhi"
})
```

MongoDB stores:

```
{
 _id: ObjectId(...),
 name: "Manas",
 age: 21,
 city: "Delhi"
}
```

MongoDB automatically creates `_id`.

---

# 7️⃣ db.collection.insertMany()

Purpose:

```
Insert multiple documents
```

Command:

```
db.students.insertMany([
 {name:"Ravi", age:22},
 {name:"Rahul", age:23},
 {name:"Ankit", age:20}
])
```

This inserts **multiple documents at once**.

---

# 8️⃣ db.collection.find()

Purpose:

```
Retrieve documents from collection
```

Command:

```
db.students.find()
```

Output:

```
{_id:1, name:"Manas", age:21}
{_id:2, name:"Ravi", age:22}
```

Meaning:

```
Shows all documents inside collection
```

---

# 9️⃣ db.collection.findOne()

Purpose:

```
Returns only one document
```

Command:

```
db.students.findOne()
```

Output:

```
{_id:1, name:"Manas", age:21}
```

---

# 🔟 db.dropDatabase()

Purpose:

```
Deletes the current database
```

Command:

```
db.dropDatabase()
```

Output:

```
{ ok: 1 }
```

Meaning:

```
Current database removed
```

---

# Bonus Command (Very Important)

### Clear collection

```
db.students.drop()
```

Meaning:

```
Deletes entire collection
```

---

# Complete MongoDB Beginner Workflow

```
Start MongoDB
net start MongoDB
```

```
Open shell
mongosh
```

```
show dbs
```

```
use school
```

```
db.createCollection("students")
```

```
db.students.insertOne({name:"Manas",age:21})
```

```
db.students.find()
```

---

# Quick Memory Table

| Command          | Purpose                |
| ---------------- | ---------------------- |
| show dbs         | list databases         |
| use dbName       | switch/create database |
| db               | show current database  |
| show collections | list collections       |
| createCollection | create collection      |
| insertOne        | insert one document    |
| insertMany       | insert many documents  |
| find             | get all documents      |
| findOne          | get one document       |
| dropDatabase     | delete database        |

---

---
Class commands Practise
---------------------------
1. open terminal
2. start working with crud commands
   >mongosh
   >show dbs    or show databases
   >use test
   >db
   >db.dropDatabase()

   >show collections
   >db.createCollection("students")
   >db.students.find()
   >db.students.renameCollection("teachers")
   >db.teachers.drop()

   >use("ecommerce")
   >db
   >db.products.insertOne({name:"Ganesh",age:21})
   >db.products.find()
   >db.products.find().pretty()
   >db.products.insertMany([
       {name:"Ganesh",age:21},
       {name:"yash",age:22},
       {name:"Jash",age:19}
       ])

   >db.products.find()
    >db.products.findOne()
   >db.products.find().pretty()
   >db.products.updateOne(
    {name:"laptop"},
    {$set:{name:"acer v"}})
     >db.products.updateMany(
    {name:"laptop"},
    {$set:{name:"asus"}})
     >db.products.deleteOne(
     {name:"laptop"}
     )
     >db.products.deleteMany(
        {name:"laptop"},
     )
cmd
--------
test> show dbs
admin          40.00 KiB
cart-backend  204.00 KiB
chat_app      244.00 KiB
chatappDB      96.00 KiB
config        108.00 KiB
firstDB        72.00 KiB
local          96.00 KiB
mongo-demo    104.00 KiB
myDB           68.00 KiB
randomDB       36.00 KiB
school         64.00 KiB
secondDB       40.00 KiB
test           72.00 KiB
test> use randomDB
switched to db randomDB
randomDB> show collections
random
randomDB> db.random.find()

randomDB> db.random.insertOne({
... name:"Ganesh",
... age:22,
... working:"student"
... }
... )
{
  acknowledged: true,
  insertedId: ObjectId('69b62502e2691b5e1263b112')
}

randomDB> db.random.find()
[
  {
    _id: ObjectId('69b62502e2691b5e1263b112'),
    name: 'Ganesh',
    age: 22,
    working: 'student'
  }
]
randomDB> db.random.find().pretty()
[
  {
    _id: ObjectId('69b62502e2691b5e1263b112'),
    name: 'Ganesh',
    age: 22,
    working: 'student'
  }
]

randomDB> db.random.insertOne( {
...     "id": 1,
...     "name": "Leanne Graham",
...     "username": "Bret",
...     "email": "Sincere@april.biz",
...     "address": {
...       "street": "Kulas Light",
...       "suite": "Apt. 556",
...       "city": "Gwenborough",
...       "zipcode": "92998-3874",
...       "geo": {
...         "lat": "-37.3159",
...         "lng": "81.1496"
...       }
...     },
...     "phone": "1-770-736-8031 x56442",
...     "website": "hildegard.org",
...     "company": {
...       "name": "Romaguera-Crona",
...       "catchPhrase": "Multi-layered client-server neural-net",
...       "bs": "harness real-time e-markets"
...     }
...   })
{
  acknowledged: true,
  insertedId: ObjectId('69b625d5e2691b5e1263b113')
}
randomDB> db.random.find()
[
  {
    _id: ObjectId('69b62502e2691b5e1263b112'),
    name: 'Ganesh',
    age: 22,
    working: 'student'
  },
  {
    _id: ObjectId('69b625d5e2691b5e1263b113'),
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }
]
randomDB> db.random.insertMany([{
...     "id": 2,
...     "name": "Ervin Howell",
...     "username": "Antonette",
...     "email": "Shanna@melissa.tv",
...     "address": {
...       "street": "Victor Plains",
...       "suite": "Suite 879",
...       "city": "Wisokyburgh",
...       "zipcode": "90566-7771",
...       "geo": {
...         "lat": "-43.9509",
...         "lng": "-34.4618"
...       }
...     },
...     "phone": "010-692-6593 x09125",
...     "website": "anastasia.net",
...     "company": {
...       "name": "Deckow-Crist",
...       "catchPhrase": "Proactive didactic contingency",
...       "bs": "synergize scalable supply-chains"
...     }
...   },
...   {
...     "id": 3,
...     "name": "Clementine Bauch",
...     "username": "Samantha",
...     "email": "Nathan@yesenia.net",
...     "address": {
...       "street": "Douglas Extension",
...       "suite": "Suite 847",
...       "city": "McKenziehaven",
...       "zipcode": "59590-4157",
...       "geo": {
...         "lat": "-68.6102",
...         "lng": "-47.0653"
...       }
...     },
...     "phone": "1-463-123-4447",
...     "website": "ramiro.info",
...     "company": {
...       "name": "Romaguera-Jacobson",
...       "catchPhrase": "Face to face bifurcated interface",
...       "bs": "e-enable strategic applications"
...     }
...   },
...   {
...     "id": 4,
...     "name": "Patricia Lebsack",
...     "username": "Karianne",
...     "email": "Julianne.OConner@kory.org",
...     "address": {
...       "street": "Hoeger Mall",
...       "suite": "Apt. 692",
...       "city": "South Elvis",
...       "zipcode": "53919-4257",
...       "geo": {
...         "lat": "29.4572",
...         "lng": "-164.2990"
...       }
...     },
...     "phone": "493-170-9623 x156",
...     "website": "kale.biz",
...     "company": {
...       "name": "Robel-Corkery",
...       "catchPhrase": "Multi-tiered zero tolerance productivity",
...       "bs": "transition cutting-edge web services"
...     }
...   },
...   {
...     "id": 5,
...     "name": "Chelsey Dietrich",
...     "username": "Kamren",
...     "email": "Lucio_Hettinger@annie.ca",
...     "address": {
...       "street": "Skiles Walks",
...       "suite": "Suite 351",
...       "city": "Roscoeview",
...       "zipcode": "33263",
...       "geo": {
...         "lat": "-31.8129",
...         "lng": "62.5342"
...       }
...     },
...     "phone": "(254)954-1289",
...     "website": "demarco.info",
...     "company": {
...       "name": "Keebler LLC",
...       "catchPhrase": "User-centric fault-tolerant solution",
...       "bs": "revolutionize end-to-end systems"
...     }
...   },
...   {
...     "id": 6,
...     "name": "Mrs. Dennis Schulist",
...     "username": "Leopoldo_Corkery",
...     "email": "Karley_Dach@jasper.info",
...     "address": {
...       "street": "Norberto Crossing",
...       "suite": "Apt. 950",
...       "city": "South Christy",
...       "zipcode": "23505-1337",
...       "geo": {
...         "lat": "-71.4197",
...         "lng": "71.7478"
...       }
...     },
...     "phone": "1-477-935-8478 x6430",
...     "website": "ola.org",
...     "company": {
...       "name": "Considine-Lockman",
...       "catchPhrase": "Synchronised bottom-line interface",
...       "bs": "e-enable innovative applications"
...     }
...   },
...   {
...     "id": 7,
...     "name": "Kurtis Weissnat",
...     "username": "Elwyn.Skiles",
...     "email": "Telly.Hoeger@billy.biz",
...     "address": {
...       "street": "Rex Trail",
...       "suite": "Suite 280",
...       "city": "Howemouth",
...       "zipcode": "58804-1099",
...       "geo": {
...         "lat": "24.8918",
...         "lng": "21.8984"
...       }
...     },
...     "phone": "210.067.6132",
...     "website": "elvis.io",
...     "company": {
...       "name": "Johns Group",
...       "catchPhrase": "Configurable multimedia task-force",
...       "bs": "generate enterprise e-tailers"
...     }
...   },
...   {
...     "id": 8,
...     "name": "Nicholas Runolfsdottir V",
...     "username": "Maxime_Nienow",
...     "email": "Sherwood@rosamond.me",
...     "address": {
...       "street": "Ellsworth Summit",
...       "suite": "Suite 729",
...       "city": "Aliyaview",
...       "zipcode": "45169",
...       "geo": {
...         "lat": "-14.3990",
...         "lng": "-120.7677"
...       }
...     },
...     "phone": "586.493.6943 x140",
...     "website": "jacynthe.com",
...     "company": {
...       "name": "Abernathy Group",
...       "catchPhrase": "Implemented secondary concept",
...       "bs": "e-enable extensible e-tailers"
...     }
...   },
...   {
...     "id": 9,
...     "name": "Glenna Reichert",
...     "username": "Delphine",
...     "email": "Chaim_McDermott@dana.io",
...     "address": {
...       "street": "Dayna Park",
...       "suite": "Suite 449",
...       "city": "Bartholomebury",
...       "zipcode": "76495-3109",
...       "geo": {
...         "lat": "24.6463",
...         "lng": "-168.8889"
...       }
...     },
...     "phone": "(775)976-6794 x41206",
...     "website": "conrad.com",
...     "company": {
...       "name": "Yost and Sons",
...       "catchPhrase": "Switchable contextually-based project",
...       "bs": "aggregate real-time technologies"
...     }
...   },
...   {
...     "id": 10,
...     "name": "Clementina DuBuque",
...     "username": "Moriah.Stanton",
...     "email": "Rey.Padberg@karina.biz",
...     "address": {
...       "street": "Kattie Turnpike",
...       "suite": "Suite 198",
...       "city": "Lebsackbury",
...       "zipcode": "31428-2261",
...       "geo": {
...         "lat": "-38.2386",
...         "lng": "57.2232"
...       }
...     },
...     "phone": "024-648-3804",
...     "website": "ambrose.net",
...     "company": {
...       "name": "Hoeger LLC",
...       "catchPhrase": "Centralized empowering task-force",
...       "bs": "target end-to-end models"
...     }
...   }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69b62612e2691b5e1263b114'),
    '1': ObjectId('69b62612e2691b5e1263b115'),
    '2': ObjectId('69b62612e2691b5e1263b116'),
    '3': ObjectId('69b62612e2691b5e1263b117'),
    '4': ObjectId('69b62612e2691b5e1263b118'),
    '5': ObjectId('69b62612e2691b5e1263b119'),
    '6': ObjectId('69b62612e2691b5e1263b11a'),
    '7': ObjectId('69b62612e2691b5e1263b11b'),
    '8': ObjectId('69b62612e2691b5e1263b11c')
  }
}
randomDB> db.random.find()
[
  {
    _id: ObjectId('69b62502e2691b5e1263b112'),
    name: 'Ganesh',
    age: 22,
    working: 'student'
  },
  {
    _id: ObjectId('69b625d5e2691b5e1263b113'),
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b114'),
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: { lat: '-43.9509', lng: '-34.4618' }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b115'),
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: { lat: '-68.6102', lng: '-47.0653' }
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b116'),
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: { lat: '29.4572', lng: '-164.2990' }
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b117'),
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: { lat: '-31.8129', lng: '62.5342' }
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b118'),
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: { lat: '-71.4197', lng: '71.7478' }
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b119'),
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: { lat: '24.8918', lng: '21.8984' }
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b11a'),
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: { lat: '-14.3990', lng: '-120.7677' }
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b11b'),
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: { lat: '24.6463', lng: '-168.8889' }
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    _id: ObjectId('69b62612e2691b5e1263b11c'),
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: { lat: '-38.2386', lng: '57.2232' }
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
]

]
randomDB> db.random.findOne()
{
  _id: ObjectId('69b62502e2691b5e1263b112'),
  name: 'Ganesh',
  age: 22,
  working: 'student'
}
randomDB> db.random.find({age:22})
[
  {
    _id: ObjectId('69b62502e2691b5e1263b112'),
    name: 'Ganesh',
    age: 22,
    working: 'student'
  }
]

randomDB> db.random.updateOne(
... { name:"Ganesh" },
... { $set :{ age:23}}
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
randomDB> db.random.find({age:23})
randomDB>[
{
    _id: ObjectId('69b62502e2691b5e1263b112'),
    name: 'Ganesh',
    age: 23,
    working: 'student'
  },
]
randomDB>db.users.updateMany(
    {city:"kadapa"},
    { $set :{ city:"Bhagalpur"}}
    )
randomDB>db.users.deleteOne(
    {city:"kadapa"}
    )
 randomDB>db.users.deleteMany(
    {city:"kadapa"}
    )
