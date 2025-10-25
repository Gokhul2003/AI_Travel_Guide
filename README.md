<h1 align="center" style="font-weight: bold;">Full-Stack Trip Planner Web App</h1>

<p align="center">
<a href="#technologies">Technologies |</a>
<a href="#features">Features |</a>
<a href="#layout">Layout |</a>
<a href="#prerequisites">Prerequisites</a>
</p>

<p align="center">
A full-stack web application that generates personalized travel itineraries for users using AI. Users can input trip details like location, days, budget, and number of travelers, and the app provides day-by-day travel plans, hotel recommendations, attractions, and local tips. Firebase Firestore stores user trips, and authentication is handled via Google Sign-In.
</p>

<h3 align="center">
<a href="https://github.com/Gokhul2003/AI_Travel_Guide" target="_blank">📱 Visit this Project</a>
</h3> <br>

<hr>

<h2 id="technologies">💻 Technologies</h2>

<b><em>Frontend:</b></em>
<ul>
<li>React: Building the UI and handling frontend logic.</li>
<li>TailwindCSS: Styling and responsive design.</li>
<li>Axios: Making HTTP requests to APIs.</li>
</ul>

<b><em>Backend & Services:</b></em>
<ul>
<li>Google Generative AI API: Generates AI-powered travel recommendations and itineraries.</li>
<li>TomTom API: Retrieves detailed information about places and maps.</li>
<li>Unsplash API: Fetches images for attractions and destinations.</li>
<li>Firebase Firestore: Stores and manages user trip data.</li>
<li>Firebase Authentication: Handles user login via Google OAuth.</li>
</ul>

<hr>

<h2 id="features">🚀 Features</h2>

<ul>
<li>AI-powered travel plans and hotel recommendations.</li>
<li>Detailed day-by-day itineraries with attractions, timings, and tips.</li>
<li>Interactive UI with responsive cards and dynamic information.</li>
<li>Persistent storage of trips using Firebase Firestore.</li>
<li>Secure login with Google OAuth.</li>
</ul>

<hr>

<h2 id="prerequisites">🗁 Prerequisites & Setup</h2>

<p><b>Install dependencies:</b></p>
<pre>npm install</pre>

<p><b>Create a <code>.env</code> file in the root directory with the following:</b></p>
<pre>
# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id # optional

# APIs
VITE_UNSPLASH_API_KEY=your_unsplash_api_key
VITE_TOMTOM_API_KEY=your_tomtom_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
VITE_GOOGLE_GEMINI_AI_API_KEY=your_google_generative_ai_api_key
</pre>

<h3>How to get your API keys</h3>

<ul>
<li><b>Firebase Configuration:</b> Go to Firebase Console → Create project. Enable Firestore and Authentication (Google Sign-In). Copy your project config (apiKey, authDomain, etc.) into <code>.env</code>.</li>
<li><b>Unsplash API:</b> Sign up at Unsplash Developers → Create an application → Copy Access Key into <code>.env</code> as <code>VITE_UNSPLASH_API_KEY</code>.</li>
<li><b>TomTom API:</b> Sign up at TomTom Developer Portal → Create a project → Generate API key → Copy into <code>.env</code> as <code>VITE_TOMTOM_API_KEY</code>.</li>
<li><b>Google OAuth Client ID:</b> In Google Cloud Console → APIs & Services → Credentials → OAuth Client ID → Select Web App, add authorized URLs → Copy Client ID into <code>.env</code>.</li>
<li><b>Google Generative AI API Key:</b> In Google Cloud Console → Enable Generative AI API → Go to Credentials → Create API Key → Copy into <code>.env</code> as <code>VITE_GOOGLE_GEMINI_AI_API_KEY</code>.</li>
</ul>

<p><b>Run the Project:</b></p>
<pre>npm run dev</pre>
<p>Open <code>http://localhost:5173</code> (or the port shown in your terminal) in your browser.</p>

<hr>

<h2 id="layout">📐 Layout</h2>

<ul>
<li>Home Page: Enter trip details to generate AI itinerary.</li>
<li>Itinerary Page: View day-by-day travel plans.</li>
<li>Hotel & Places Cards: Interactive cards with photos, timings, and tips.</li>
<li>User Dashboard: Manage saved trips using Firebase login.</li>
</ul>

<hr>

<h2 id="contributing">🤝 Contributing</h2>

<p>Fork the repo → Create a branch → Make changes → Push → Open a PR.</p>

<hr>

<h2 id="license">📄 License</h2>
<p>MIT License</p>
