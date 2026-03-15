
---

# MongoDB Compass (GUI) Working

---

# 1️⃣ What is MongoDB Compass?

MongoDB Compass is a **Graphical User Interface (GUI)** tool used to interact with MongoDB databases visually.

Instead of writing commands in the shell, you can **click and manage databases**.

Purpose:

```
✔ Visual interface for MongoDB
✔ Manage databases and collections
✔ Insert / update / delete documents
✔ Run queries visually
✔ Analyze indexes and schema
```

---

# 2️⃣ How Compass Works (Architecture)

Compass connects to the MongoDB server (`mongod`).

Diagram:

```
Developer
   │
   │
MongoDB Compass (GUI)
   │
   │
mongodb://localhost:27017
   │
   ▼
mongod (MongoDB Server)
   │
   ▼
Database
```

Meaning:

```
Compass sends requests → mongod processes them → database updated
```

---

# 3️⃣ Opening MongoDB Compass

Steps:

```
1 Start MongoDB server
2 Open MongoDB Compass
3 Enter connection string
4 Click Connect
```

Connection string example:

```
mongodb://localhost:27017
```

Explanation:

```
mongodb:// → protocol
localhost → your computer
27017 → MongoDB default port
```

---

# 4️⃣ Compass Interface Overview

After connecting, Compass shows:

```
Database List
Collections
Documents
Query Bar
Schema / Index tabs
```

Structure:

```
MongoDB Server
     │
     │
Databases
     │
     │
Collections
     │
     │
Documents
```

---

# 5️⃣ Creating a Database in Compass

Steps:

```
1 Click "Create Database"
2 Enter Database Name
3 Enter Collection Name
4 Click Create
```

Example:

```
Database Name : school
Collection Name : students
```

Result:

```
school
 └── students
```

---

# 6️⃣ Creating a Collection

Steps:

```
1 Select Database
2 Click "Create Collection"
3 Enter Collection Name
4 Click Create
```

Example:

```
Collection: teachers
```

Result:

```
school
 ├── students
 └── teachers
```

---

# 7️⃣ Inserting Documents in Compass

Steps:

```
1 Open collection
2 Click "Add Data"
3 Select "Insert Document"
4 Enter JSON document
5 Click Insert
```

Example document:

```json
{
  "name": "Manas",
  "age": 21,
  "city": "Delhi"
}
```

MongoDB automatically adds:

```
_id : ObjectId(...)
```

---

# 8️⃣ Viewing Documents

Steps:

```
1 Open collection
2 Click "Documents" tab
3 All documents appear
```

Example:

```
{
 _id: ObjectId(...),
 name: "Manas",
 age: 21
}
```

You can:

```
✔ Edit document
✔ Delete document
✔ Copy document
```

---

# 9️⃣ Running Queries in Compass

Compass provides a **query bar**.

Example query:

```
{ age: 21 }
```

Meaning:

```
Find documents where age = 21
```

Example result:

```
{
 name: "Manas",
 age: 21
}
```

---

# 🔟 Schema Tab

Schema tab analyzes document structure.

Shows:

```
✔ Field names
✔ Data types
✔ Field distribution
✔ Document structure
```

Example:

```
Field: name → string
Field: age → number
Field: city → string
```

Useful for:

```
Understanding database structure
```

---

# 1️⃣1️⃣ Index Tab

Indexes improve query performance.

Compass allows:

```
✔ Create index
✔ View index
✔ Manage index
```

Example index:

```
age : 1
```

Meaning:

```
Ascending index on age field
```

---

# 1️⃣2️⃣ Deleting Documents

Steps:

```
1 Open collection
2 Select document
3 Click Delete
4 Confirm deletion
```

Document removed from database.

---

# 1️⃣3️⃣ Dropping Collection

Steps:

```
1 Select collection
2 Click three-dot menu
3 Select Drop Collection
```

Meaning:

```
Entire collection deleted
```

---

# 1️⃣4️⃣ Dropping Database

Steps:

```
1 Select database
2 Click drop database
3 Confirm
```

Result:

```
Database removed
```

---

# 1️⃣5️⃣ Compass vs Mongo Shell

| Feature   | MongoDB Compass      | Mongo Shell        |
| --------- | -------------------- | ------------------ |
| Interface | GUI                  | CLI                |
| Usage     | Click based          | Command based      |
| Learning  | Easier for beginners | Used by developers |
| Queries   | Visual query builder | Manual queries     |

---

# Quick Revision Summary

```
MongoDB Compass = GUI tool for MongoDB
```

Main features:

```
✔ Connect to MongoDB server
✔ Create database
✔ Create collection
✔ Insert documents
✔ Run queries
✔ Analyze schema
✔ Manage indexes
```

Connection string:

```
mongodb://localhost:27017
```

---
Trick 🔥
 press `CTRL+mouse click`  on collections to open multiple tabs

