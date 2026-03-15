**MongoDB CRUD Commands Revision Notes** i

CRUD means:

```text
C → Create
R → Read
U → Update
D → Delete
```

---

# 1️⃣ CREATE (Insert Data)

Used to **add documents into a collection**.

### insertOne()

```javascript
db.students.insertOne({
  name: "Manas",
  age: 21,
  city: "Delhi"
})
```

Result stored:

```javascript
{
  _id: ObjectId(...),
  name: "Manas",
  age: 21,
  city: "Delhi"
}
```

---

### insertMany()

Used to insert **multiple documents at once**.

```javascript
db.students.insertMany([
  { name: "Ravi", age: 22 },
  { name: "Rahul", age: 23 },
  { name: "Ankit", age: 20 }
])
```

---

# 2️⃣ READ (Retrieve Data)

Used to **fetch documents from a collection**.

### find()

```javascript
db.students.find()
```

Returns:

```javascript
{ _id:1, name:"Manas", age:21 }
{ _id:2, name:"Ravi", age:22 }
```

---

### findOne()

Returns **only one document**.

```javascript
db.students.findOne()
```

Example output:

```javascript
{ _id:1, name:"Manas", age:21 }
```

---

### find with condition

```javascript
db.students.find({ age: 21 })
```

Meaning:

```text
Return documents where age = 21
```

---

# 3️⃣ UPDATE (Modify Data)

Used to **change existing documents**.

### updateOne()

```javascript
db.students.updateOne(
  { name: "Manas" },
  { $set: { age: 22 } }
)
```

Meaning:

```text
Find document where name = Manas
Update age to 22
```

---

### updateMany()

```javascript
db.students.updateMany(
  { city: "Delhi" },
  { $set: { city: "Mumbai" } }
)
```

Meaning:

```text
Update all documents where city = Delhi
```

---

### replaceOne()

Replaces entire document.

```javascript
db.students.replaceOne(
  { name: "Manas" },
  { name: "Manas", age: 25, city: "Delhi" }
)
```

---

# 4️⃣ DELETE (Remove Data)

Used to **delete documents from a collection**.

### deleteOne()

```javascript
db.students.deleteOne({ name: "Ravi" })
```

Meaning:

```text
Deletes first document where name = Ravi
```

---

### deleteMany()

```javascript
db.students.deleteMany({ age: 20 })
```

Meaning:

```text
Deletes all documents where age = 20
```

---

# 5️⃣ Remove Entire Collection

```javascript
db.students.drop()
```

Meaning:

```text
Deletes entire collection
```

---

# 6️⃣ Remove Entire Database

```javascript
db.dropDatabase()
```

Meaning:

```text
Deletes current database
```

---

# CRUD Summary Table

| Operation | Command                                 |
| --------- | --------------------------------------- |
| Create    | insertOne(), insertMany()               |
| Read      | find(), findOne()                       |
| Update    | updateOne(), updateMany(), replaceOne() |
| Delete    | deleteOne(), deleteMany()               |

---

# Simple CRUD Workflow Example

```javascript
use school
```

```javascript
db.students.insertOne({name:"Manas",age:21})
```

```javascript
db.students.find()
```

```javascript
db.students.updateOne({name:"Manas"},{$set:{age:22}})
```

```javascript
db.students.deleteOne({name:"Manas"})
```

---

