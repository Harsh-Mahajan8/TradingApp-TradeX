# <img width="52" height="52" alt="icon" src="https://github.com/user-attachments/assets/5165aa35-48a0-4946-b933-b714f983e9d2" /><h3>TradeX - Trading Simulator</h3>

TradeX is a full-stack trading simulator that allows users to experience real-time stock trading without any financial risk. Users can securely sign up, buy/sell simulated stocks, track their portfolio, and manage favorites.

---

## 🚀 Live Demo

* **Frontend (Main Website):** [https://tradex-trading-simulator.onrender.com/](https://tradex-trading-simulator.onrender.com/)
* **Backend (Render API):** [https://tradingapp-tradex.onrender.com](https://tradingapp-tradex.onrender.com)

---

## ⚙️ Tech Stack

**Frontend:**

* React (Vite)
* React Router DOM
* Axios
* Bootstrap / Material UI
* React Toastify for notifications

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose ODM)
* JWT Authentication
* Bcrypt for password hashing
* Cookie Parser for secure token handling

**Hosting / Deployment:**

* Frontend deployed on **Render (Static Site)**
* Backend deployed on **Render (Web Service)**
* Database hosted on **MongoDB Atlas**

---

## 📚 Features

✅ **JWT Authentication** — Secure signup and login with token-based auth
✅ **Simulated Trading** — Buy and sell time-limited virtual stocks
✅ **Wishlist / Favorites** — Save preferred stocks for quick access
✅ **User Dashboard** — Manage your simulated portfolio and trades
✅ **Session Persistence** — Auto-verification using secure cookies
✅ **Responsive UI** — Optimized for desktop and mobile

---

## 🧠 How to Use the Simulator

1. **Open the main website:**
   👉 [https://tradex-trading-simulator.onrender.com/](https://tradex-trading-simulator.onrender.com/)

2. **Create an account:**
   Go to **Sign Up**, fill out the form, and submit.

3. **Login:**
   You’ll be redirected to the login page. Enter your credentials to access the simulator.

4. **Start Trading:**

   * Explore available stocks
   * Buy or sell stocks (limited-time simulated trading)
   * Add favorites to your wishlist
   * Track portfolio performance

---

## 🛠️ Local Development Setup

git clone https://github.com/<your-username>/TradeX-Trading-Simulator.git
cd TradeX-Trading-Simulator

# Backend
cd backend
npm install
# Create .env with PORT, MONGO_URI, JWT_SECRET, FRONTEND_URL
npm start

# Frontend
cd ../frontend
npm install
npm run dev

Access the app at **[http://localhost:5173/](http://localhost:5173/)**.

---

📦 TradeX-Trading-Simulator
 ┣ 📂 backend
 ┃ ┣ 📂 Controllers
 ┃ ┣ 📂 Models
 ┃ ┣ 📂 Routes
 ┃ ┣ 📂 Middlewares
 ┃ ┗ server.js
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 assets
 ┃ ┗ vite.config.js
 ┗ README.md

---

## 🔐 Authentication Flow

* User registers → credentials securely hashed using **bcrypt**
* On login → server issues **JWT token** stored in HTTP-only cookie
* Middleware (`userVerification`) verifies JWT on protected routes
* Only authenticated users can access trading features

---

## 🧾 API Endpoints

| Method   | Endpoint                   | Description                     |
| -------- | -------------------------- | ------------------------------- |
| **POST** | `/api/auth/signup`         | Register a new user             |
| **POST** | `/api/auth/login`          | Login and get JWT               |
| **GET**  | `/api/auth/me`             | Get logged-in user data         |
| **GET**  | `/api/auth/logout`         | Logout user                     |
| **POST** | `/api/user/updateuserdata` | Update user profile (protected) |
| **POST** | `/api/trade/buy`           | Buy stock (protected)           |
| **POST** | `/api/trade/sell`          | Sell stock (protected)          |
| **GET**  | `/api/trade/positions`     | Fetch user’s active holdings    |

---

## 🧑‍💻 Developer Notes

* Configure CORS properly in the backend to allow the frontend origin
* Always secure `.env` variables and never commit them
* Use `console.log()` for debugging only in development mode

---

## 📸 Suggested Screenshots

* **Login Page**
* <img width="1919" height="959" alt="image" src="https://github.com/user-attachments/assets/73f1ab24-a8ac-4023-a72f-e33f7d5ccbd5" />

* **Trading Dashboard**
* <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/69d1d531-c28e-4e6a-bcc3-0cc12b2e526b" />

* **Wishlist / Portfolio Page**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d9feaba9-0f62-45d1-986f-122030fd99d4" />

---

## 💡 Future Enhancements(Planning)

* Real-time stock data integration via public API
* Portfolio analytics
* Leaderboard for top traders
* Dark/light theme toggle

---

## 🤝 Contributing

Pull requests and suggestions are welcome!
For major feature changes, please open an issue to discuss your ideas first.

---

## 🧑‍💼 Author

**Developed by:** Harsh Mahajan
