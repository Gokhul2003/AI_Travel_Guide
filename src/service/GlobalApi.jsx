import axios from "axios";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const GetPlaceDetails = async (placeLabel) => {
  if (!placeLabel) return { place: null, photo: null };

  try {
    // Check if we already have data in Firebase
    const docRef = doc(db, "PlaceCache", placeLabel);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Use cached data
      return docSnap.data();
    }

    // Fetch from TomTom api
    const tomtomRes = await axios.get(
      `https://api.tomtom.com/search/2/search/${encodeURIComponent(placeLabel)}.json`,
      { params: { key: import.meta.env.VITE_TOMTOM_API_KEY, limit: 5 } }
    );

    // Fetch from Unsplash api
    const unsplashRes = await axios.get(
      `https://api.unsplash.com/search/photos`,
      {
        params: { query: placeLabel, per_page: 1 },
        headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}` }
      }
    );

    const result = {
      place: tomtomRes.data.results[0] || null,
      photo: unsplashRes.data.results[0]?.urls?.regular || "/placeholder.jpg"
    };

    // Cache result in Firebase
    await setDoc(doc(db, "PlaceCache", placeLabel), result);

    return result;
  } catch (err) {
    if (err.response?.status === 429) {
      console.warn("Rate limit exceeded for TomTom API:", placeLabel);
    } else {
      console.error("GetPlaceDetails error:", err);
    }
    return { place: null, photo: "/placeholder.jpg" };
  }
};
