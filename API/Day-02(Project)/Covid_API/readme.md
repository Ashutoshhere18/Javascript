
# 🦠 India COVID-19 Stats Tracker 🇮🇳

Welcome to the **India COVID-19 Stats Tracker** — a lightweight and dynamic app built using vanilla JavaScript that fetches real-time COVID-19 stats from a reliable public API and displays it in a user-friendly table format! 📊

---

## 📌 Features

✅ Fetches the **latest COVID-19 statistics** region-wise in India  
✅ Automatically calculates **total confirmed cases** (Indian + Foreign)  
✅ Updates table rows dynamically using DOM manipulation  
✅ Built using **vanilla JavaScript** — no frameworks involved!  

---

## 🔍 How It Works

1. Makes a `fetch()` request to:  
   `https://api.rootnet.in/covid19-in/stats/latest`

2. Receives a JSON response containing regional data 🗺️  
3. For each state/region:
   - Creates a new table row (`<tr>`)  
   - Populates cells with:
     - Serial number  
     - Location  
     - Indian cases  
     - Foreign cases  
     - Discharged  
     - Deaths  
     - Total confirmed (Indian + Foreign)

4. Appends the row into the `<tbody>` with `id="tBody"` 💡

---

## 🧩 Snapshot


````

---


## 📎 Dependencies

No dependencies! Just **pure JavaScript** 💪

---

## 📅 Last Updated

`Dynamically pulls the latest data at runtime 📡`

---

## 🧠 Author

Made with ❤️ by Mishra Ashutosh

---

## 🛡️ Disclaimer

This tool is for educational/demo purposes. Always refer to official government websites for verified COVID-19 information.

---

```

