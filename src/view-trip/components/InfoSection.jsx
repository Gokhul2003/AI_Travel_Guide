import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    if (trip?.userSelection?.location?.label) {
      GetPlaceDetails(trip.userSelection.location.label).then((res) => {
        setPhotoUrl(res.photo);
      });
    }
  }, [trip]);

  return (
    <div className="mb-10">
      <img
        src={photoUrl}
        alt="trip location"
        className="h-[340px] w-full object-cover rounded-2xl shadow-lg transition-all hover:scale-105 duration-300"
      />
      <div className="my-5 flex flex-col gap-3">
        <h2 className="font-extrabold text-3xl text-orange-500">{trip?.userSelection?.location?.label}</h2>
        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-1 bg-gray-200 rounded-full text-gray-600 font-medium text-sm">📅 {trip?.userSelection?.noOfDays} Day(s)</span>
          <span className="px-4 py-1 bg-gray-200 rounded-full text-gray-600 font-medium text-sm">💰 {trip?.userSelection?.budget} Budget</span>
          <span className="px-4 py-1 bg-gray-200 rounded-full text-gray-600 font-medium text-sm">👥 {trip?.userSelection?.traveler} Traveler(s)</span>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
