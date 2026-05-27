use('myusers');

db.users.insertMany([
  {
    name: "Ganesh",
    age: 23,
    city: "Chennai"
  },
  {
    name: "Arun",
    age: 28
  },
  {
    name: "Priya",
    age: 21,
    city: "Bangalore"
  },
  {
    name: "Karthik",
    age: 30,
    email: "karthik@gmail.com"
  },
  {
    name: "Meena",
    age: 25,
    city: "Hyderabad",
    phone: "9876543210"
  },
  {
    name: "Rahul",
    age: 35
  }
])

// db.users.find();

db.users.find(
  {age:{$exists:true}}
)

db.users.find({age:{$type:'int'}})

db.users.find({
  city:{$exists:true}
})
