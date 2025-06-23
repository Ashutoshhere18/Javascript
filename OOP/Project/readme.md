
# 🌐 Responsive Form Validation Web Project

A fully responsive form validation web app using **HTML**, **CSS**, **Bootstrap 5**, and **JavaScript/jQuery** 💡  
Includes real-time **email**, **password**, and **mobile number** validation using **RegEx** and `.test()` method.

---

## 📌 Overview

This project showcases:

- ✅ Clean & semantic **HTML5**
- 🎨 Modern UI with **CSS3** and **Bootstrap 5**
- 📲 Fully **responsive design**
- 🔍 **Client-side validation** using **jQuery** + **RegEx**
- ⚡ Real-time feedback on user inputs

---

## 🧪 Form Validation (jQuery + RegEx)

Interactive form that checks:

| 📝 Field          | ✅ Validates Using…                           |
|------------------|-----------------------------------------------|
| 📧 **Email**       | Standard email structure (example@domain.com) |
| 🔒 **Password**    | Minimum 6 characters, at least 1 number        |
| 📱 **Mobile Number** | 10-digit Indian mobile (starts with 7, 8, 9)   |

### 🔧 Validation Logic

- Uses jQuery `.test()` with RegEx to **validate** inputs  
- Shows **live feedback** using Bootstrap's `is-valid` and `is-invalid` classes  
- Triggers validation on `blur` and/or `keyup` events for immediate UX 🚀

### 💻 RegEx Patterns Used

```javascript
// Email
/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

// Password (Minimum 6 chars, at least one letter & one number)
^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$

// Mobile Number (Indian format)
^[7-9][0-9]{9}$
````

### 📸 Example: Email Validation with jQuery

```javascript
$('#email').on('blur', function () {
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (emailPattern.test($(this).val())) {
    $(this).addClass('is-valid').removeClass('is-invalid');
  } else {
    $(this).addClass('is-invalid').removeClass('is-valid');
  }
});
```

---

## 🛠️ Tech Stack

| Tech            | Description                              |
| --------------- | ---------------------------------------- |
| **HTML5**       | Semantic structure and form elements     |
| **CSS3**        | Custom styling for layout and effects    |
| **Bootstrap 5** | Responsive grid system & utility classes |
| **jQuery**      | Form logic and event handling            |
| **JavaScript**  | Interactive behavior and validation      |

---

## 🔧 Installation

1. Clone the repo
https://github.com/Ashutoshhere18/Javascript/edit/main/OOP/Project
   ```bash
   git clone 
   ```

2. Open `index.html` in your browser

3. You're done! 🎉

---

## 🌟 Features

* 🌐 Mobile-friendly layout
* 🧠 Smart form validation
* 💬 Real-time user feedback
* 💡 Clean, readable code with comments
* 🔄 Smooth and interactive user experience

---

## 🔍 Demo
> [![Watch the demo]]


https://github.com/user-attachments/assets/25a2de07-529e-44c1-a88a-c6dd591081d1



---


## 🙌 Acknowledgments

* Bootstrap 5 Docs
* jQuery Documentation
* W3Schools & MDN for RegEx resources
* My own practice and improvements 🎯

---

## ✉️ Contact

* 📧 Email: Mishraashutoshwk@gmail.com
* 💼 LinkedIn: linkedin.com/in/ashutosh-mishra-26633334b

---

> *“Validation isn't just about checking inputs—it's about guiding the user toward a perfect experience.”* 💬

```


