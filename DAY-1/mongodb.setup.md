---

# MongoDB Setup
---

# 1️⃣ MongoDB Architecture Overview

MongoDB setup mainly has **3 important components**.

```
mongod
mongosh
MongoDB Compass
```

Diagram:

```
            Developer
               │
               │
      ┌────────┴─────────┐
      │                  │
   mongosh           Compass
   (CLI Tool)        (GUI Tool)
      │                  │
      └────────┬─────────┘
               │
             mongod
       (MongoDB Database Server)
               │
               │
            Database
```

Meaning:

```
mongod  → Database Server
mongosh → Command Line Tool
Compass → Graphical Tool
```

---

# 2️⃣ mongod (MongoDB Server)

`mongod` is the **core engine of MongoDB**.

It is responsible for:

```
✔ storing data
✔ managing databases
✔ handling queries
✔ running the database server
```

Think of it like:

```
MySQL → mysqld
MongoDB → mongod
```

Diagram:

```
         mongod
   (MongoDB Server Engine)
           │
           │
   ┌─────────────────┐
   │ Stores data     │
   │ Executes query  │
   │ Manages DB      │
   └─────────────────┘
```

Important rule:

```
If mongod is not running → MongoDB will not work
```

---

# 3️⃣ MongoDB Shell (mongosh)

`mongosh` is the **Command Line Interface (CLI)** used by developers.

It allows developers to **send commands to the MongoDB server**.

Example workflow:

```
Developer → mongosh → mongod → Database
```

Example commands:

```
show dbs
use school
db.students.find()
```

Explanation:

```
mongosh sends commands
mongod executes commands
```

---

# 4️⃣ MongoDB Compass

MongoDB Compass is a **GUI tool**.

Instead of typing commands, developers can **interact visually**.

You can:

```
✔ Create database
✔ Insert documents
✔ View collections
✔ Run queries
✔ Analyze indexes
```

Workflow:

```
Developer → Compass → mongod → Database
```

---

# 5️⃣ Default MongoDB Address

MongoDB server runs on a **default connection address**.

```
mongodb://localhost:27017
```

or

```
mongodb://127.0.0.1:27017
```

Breakdown:

```
mongodb://   → protocol
localhost    → your computer
27017        → MongoDB port
```

Diagram:

```
Computer
   │
   │
localhost:27017
   │
   ▼
mongod (database server)
```

---

# 6️⃣ localhost vs 127.0.0.1

Both represent the **same machine**.

```
localhost = your computer
127.0.0.1 = your computer
```

So these are equivalent:

```
mongodb://localhost:27017
mongodb://127.0.0.1:27017
```

---

# 7️⃣ How Everything Connects

Complete architecture:

```
              MongoDB Setup

             localhost:27017
                   │
                   │
                mongod
           (Database Server)
               /      \
              /        \
        mongosh      Compass
         (CLI)        (GUI)
```

Explanation:

```
mongod → runs database
mongosh → command interface
Compass → graphical interface
```

Both connect to the server using a **connection string**.

---

# 8️⃣ MongoDB Windows Service Commands

When MongoDB is installed as a **Windows service**, you can control it using **CMD (Administrator)**.

### Start MongoDB service

```
net start MongoDB
```

Meaning:

```
Starts the mongod database server
```

---

### Stop MongoDB service

```
net stop MongoDB
```

Meaning:

```
Stops the mongod server
```

---

### Full workflow

```
Open CMD as Administrator
       │
       ▼
net start MongoDB
       │
       ▼
mongod server starts
       │
       ▼
Use mongosh or Compass
```

Stopping server:

```
net stop MongoDB
```

---

# 9️⃣ Real Developer Workflow

Typical workflow:

```
1 Start MongoDB server
2 Connect using mongosh or Compass
3 Create database
4 Create collections
5 Insert documents
6 Run queries
```

---

# 🔟 Quick Revision Summary

```
mongod  → MongoDB database server
mongosh → CLI tool to send commands
Compass → GUI tool to manage MongoDB
```

Connection:

```
mongodb://localhost:27017
```

Service commands:

```
net start MongoDB
net stop MongoDB
```

---

