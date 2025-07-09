

# 📁 API - Personal Learning & Practice

This folder contains all the files, code, and notes related to **API (Application Programming Interface)**—including its connection with **server**, **client**, and **user**. This is meant as a self-learning guide to prepare for interviews and understand how APIs work in real-world applications.

---

## 📘 What is an API?

**API (Application Programming Interface)** is like a *middleman* between two software programs or systems that helps them talk to each other.

* Example: When you use a weather app, it doesn’t generate weather info. It asks an API like:
  *“Hey server, give me weather data for Delhi.”*
  And the server replies with the data.

**In simple words**:
API is a messenger that takes a request from one program (like your app), asks another program (like a server), and brings back the answer.

---

## 🖥️ What is a Server?

A **server** is a computer that listens to client requests and responds with the required data.

* Think of it like a **restaurant kitchen**: you order food (request), the kitchen prepares it (process), and gives it back (response).
* The server hosts the **API** and **database**.

---

## 💻 What is a Client?

A **client** is the software (usually a browser or app) that sends requests to the server.

* You are the **client** when you open a website or app.
* Example: When you click “Login” or “Search,” your browser sends a request to the server.

---

## 👤 Who is the User?

A **user** is a real person who interacts with the client (browser or app).

* The user doesn’t know or see the backend (server or API).
* All the user sees is what the **client (frontend)** shows.

---

## 🔄 How They Work Together

```
User  →  Client (Browser/App)  →  API  →  Server  →  Database
        ←         ←         ←         ←
          Response goes back the same path
```

Example:

1. You search for “shoes” on an e-commerce app.
2. The app (client) sends a request to the API.
3. The API asks the server for product data.
4. The server fetches data from the database.
5. The API sends the product data back to the app.
6. You (user) see the list of shoes.

---

## 🧠 Why is API Important?

* 🔁 **Connects frontend and backend**
* 🔒 **Ensures security** by only exposing allowed data
* ⚙️ **Makes development faster** (reusable code)
* 📡 **Used in almost every app** (Instagram, YouTube, Amazon, etc.)
* 🔍 **Helps in separating concerns**: frontend and backend teams can work independently

---


## 🗣️ Important Interview Points

* ✅ API is a communication bridge.
* ✅ REST APIs use HTTP methods like GET, POST, PUT, DELETE.
* ✅ JSON is most commonly used format for data exchange.
* ✅ Status codes are important: 200 (OK), 404 (Not Found), 500 (Server Error).
* ✅ APIs are used in mobile apps, web apps, smart TVs, etc.

---

