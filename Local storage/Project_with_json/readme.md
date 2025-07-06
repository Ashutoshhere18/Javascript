
# 🛒 Sportify - Your Ultimate Sports Shopping Experience! 🏆

Welcome to **Sportify** – a dynamic, JavaScript-powered e-commerce frontend for all your sporty needs! Built with simplicity and speed, this app features real-time cart management, product display, and localStorage cart persistence.  

> ⚽🏸🏀🏏👟 From Adidas to Yonex, from shoes to rackets — we’ve got you covered!  

---

## 🚀 Features

✅ Dynamic Product Display  
✅ Add to Cart with Quantity Handling  
✅ Remove Items from Cart  
✅ Real-Time Cart Total with 5% Discount  
✅ Cart State Persistence using `localStorage`  
✅ Responsive UI with Bootstrap styling  

---

## 📦 Product Categories

- 👟 **Footwear**
- 🏸 **Racket Sports**
- 🏏 **Cricket**
- 🏀 **Balls**
- 🧢 **Apparel & Accessories**
- 🧘 **Fitness**
- 🏊 **Swimming**

Over **20 high-quality products** displayed dynamically from a JSON array! 📦

---

## 💻 Tech Stack

- **HTML5**
- **CSS3** (with Bootstrap)
- **JavaScript (Vanilla JS)**
- `localStorage` for persistent cart data

---

## 📂 How It Works

### ➕ Add to Cart
Click the `Add to Cart` button on any product to instantly add it to your cart. If it’s already there, quantity will automatically increase.  

### 🗑️ Remove from Cart
Click `Cancel` to remove an item from the cart entirely.

### 💰 Checkout Section
- 🧾 **Amount**: Total cost before discount  
- 🎁 **Discount**: Flat 5%  
- 🧮 **Total to Pay**: Final payable amount after discount  
- 🟢 `Proceed to Checkout` button (visual only, customizable)

---

## 🧠 Code Highlights

### 📁 `products[]`
Array of 20 pre-defined product objects with properties like:
```js
{
  id, name, price, description, category,
  brand, image, rating, Qty
}
````

### 📲 `productDisplay()`

Dynamically creates and appends product cards to the DOM using JavaScript.

### 🛍️ `AddToCart(items)`

Adds items to the cart. If item exists, it increases `Qty`. Updates localStorage accordingly.

### 🧾 `CartDisplay()`

Calculates totals, displays cart contents, and creates a billing section with dynamic discount.

### ❌ `DeleteFromCart(index)`

Removes an item from cart and updates both DOM and localStorage.

---

## 📸 Sample 

> 

---



## ✨ Author

Built with ❤️ by \Mishra Ashutosh

---

## 🤝 Contributions

Pull requests are welcome. Feel free to suggest improvements or new features!

---

## 📃 License

[MIT](LICENSE)

---

## 🙌 Thank You for Visiting Sportify!

> *"Train hard, shop harder!"* 💪🏽

```

