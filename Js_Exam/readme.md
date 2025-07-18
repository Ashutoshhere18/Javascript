
# 📝 Simple Task Manager

A lightweight and intuitive **Task Manager App** built using vanilla JavaScript that allows users to add, edit, delete, and store tasks in **localStorage** — so your data stays even after refreshing the page! 🚀

---

## 📌 Features

- ✅ Add new tasks with title, description, due date, and priority
- 🔁 Edit existing tasks with a single click
- ❌ Delete tasks you no longer need
- 💾 Persist tasks using `localStorage`
- 🗂️ Priority levels: Low | Medium | High
- ⚡ Instant DOM updates on every action

---

## 🛠️ Technologies Used

- HTML5
- CSS3 / Bootstrap (optional for styling)
- JavaScript (ES6)
- LocalStorage API

---

## 💡 How It Works

1. **Add Task**  
   Fill in the title, description, date, and priority, then click **"Add Task"**.

2. **Edit Task**  
   Click **Edit** on a task — fields auto-populate. Make changes and click **"Update Task"**.

3. **Delete Task**  
   Remove a task with a single click on the **Delete** button.

4. **Persistence**  
   All tasks are stored in `localStorage`, so they remain even after a page refresh.

---

## 📷 UI Preview 


---

## 📁 File Structure

```

📦 Task Manager
┣ 📄 index.html
┣ 📄 style.css
┣ 📄 script.js ← This file
┗ 📄 README.md

```

---

## 🧠 Code Highlights

- Uses `createElement` and `appendChild` for dynamic task creation  
- Data stored using `JSON.stringify()` and retrieved using `JSON.parse()`  
- Edit mode toggled via `editIndex` tracking

---



## 🙌 Contribute

Found a bug or want to suggest a feature? Feel free to fork and submit a pull request!  
Let’s make task management better — together! 🤝

---

