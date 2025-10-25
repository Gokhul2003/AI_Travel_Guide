import { db } from "@/service/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (tripId) GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTrip(docSnap.data());
    } else {
      toast("No trip found 😞");
    }
  };

  if (!trip || !trip.tripData)
    return <div className="p-10 text-center text-gray-500">Loading trip details...</div>;

  return (
    <div className="p-5 md:px-20 lg:px-44 xl:px-56 mb-20">
      <InfoSection trip={trip} />
      {trip.tripData?.hotel_options && <Hotels trip={trip} />}
      {trip.tripData?.itinerary && <PlacesToVisit trip={trip} />}
      <Footer trip={trip} />
    </div>
  );
}

export default ViewTrip;
