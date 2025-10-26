<h1 align="center">🧭 Full-Stack Trip Planner Web App</h1>

A **full-stack AI-powered travel Guide** that helps users create **personalized travel itineraries** with hotel recommendations, attractions, and local insights — all in one platform.

Users can input trip details like **location, number of days, budget, and travelers**, and instantly receive an **AI-generated itinerary** with maps, images, and hotel suggestions.

---
## 🎥 Demo Video
<h3 align="center">Watch the full walkthrough of the Trip Planner Web App in action 👇  </h3>

https://github.com/user-attachments/assets/03a8a870-2cfc-4408-a710-4230e72cdb20

---



## 🚀 Features

- 🤖 AI-generated itineraries (customized by destination, budget, and duration)
- 🏨 Hotel recommendations with pricing & details
- 🗓️ Day-by-day travel plans (morning, afternoon, evening breakdown)
- 🗺️ Interactive maps & places powered by TomTom API
- 🖼️ High-quality destination images from Unsplash
- 🔒 Secure Google Sign-In (OAuth)
- 💾 Firebase Firestore database for saving trips
- 🎨 Responsive UI built with React + Tailwind CSS
- ⚡ Fast, modern frontend stack (Vite + React Router)

---

## 💻 Technologies Used

### **Frontend**
- ⚛️ **React.js** — Component-based UI  
- 🎨 **Tailwind CSS** — Rapid, responsive styling  
- 🌐 **Axios** — API requests and data fetching  

### **Backend & Services**
- 🧠 **Google Generative AI API** — Generates AI-based trip plans  
- 🗺️ **TomTom API** — Fetches maps, distances, and local details  
- 📸 **Unsplash API** — Provides stunning travel images  
- 🔥 **Firebase Firestore** — Database to store user trips  
- 🔐 **Firebase Authentication** — Google OAuth-based login  

---

## 📂 Project Layout

| Folder | Description |
|--------|--------------|
| **src/components/** | Reusable UI components (cards, buttons, modals, etc.) |
| **src/create-trip/** | Page for creating a new trip |
| **src/view-trip/** | Displays AI-generated itinerary (day-wise) |
| **src/my-trips/** | User dashboard showing saved trips |
| **src/service/** | API integrations and Firebase configuration |
| **src/App.jsx** | Main App component |
| **src/main.jsx** | Application entry point |

---

## 🧱 Project Architecture

```

src/
│
├── components/        # Reusable UI components
├── create-trip/       # Page to create new trip
├── view-trip/         # Displays generated itinerary
├── my-trips/          # User dashboard
├── service/           # API and Firebase config
├── App.jsx
└── main.jsx

````

---

## 🧾 Setup & Installation Guide

### 1️⃣ Install Dependencies

```bash
npm install
````

### 2️⃣ Create a `.env` File in the Root Directory

```bash
# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id   # optional

# APIs
VITE_UNSPLASH_API_KEY=your_unsplash_api_key
VITE_TOMTOM_API_KEY=your_tomtom_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
VITE_GOOGLE_GEMINI_AI_API_KEY=your_google_generative_ai_api_key
```


Uploading Demo_Ai_Travel_Guide (1).mp4…


### 3️⃣ Get Your API Keys

* **Firebase:** Create a project → Enable Firestore + Google Sign-In
* **Unsplash:** Register at [Unsplash Developers](https://unsplash.com/developers)
* **TomTom:** Get API key at [TomTom Developer Portal](https://developer.tomtom.com/)
* **Google OAuth Client ID:** Create under *APIs & Services → Credentials → OAuth Client ID*
* **Google Generative AI API Key:** Obtain from *Google Cloud Console → Generative AI API*

### 4️⃣ Run the App

```bash
npm run dev
```

Then open 👉 [http://localhost:5173](http://localhost:5173)

---

## 📸 Example Screens

### 🏖️ AI Itinerary Cards (Sample Output)

Each day is divided into **Morning**, **Afternoon**, and **Evening**, showing:

* Time slot
* Attraction name
* Description
* Ticket info (if any)
* Image (fetched via Unsplash API)

---

## 🤝 Contributing

Want to improve this project? Follow these steps:

1. **Fork** this repository
2. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**

   ```bash
   git commit -m "Added new feature"
   ```
4. **Push** to your branch

   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** 🚀

---

## 💡 Author

👤 **Gokhul Kooranchi**
📧 *[thegokhul.kooranchi@gmail.com](mailto:gokhulkooranchi@gmail.com)*
💻 MCA Student | Web Developer | AI Enthusiast

> ⚙️ *Built with ❤️ using React, Firebase, and Google Generative AI.*
