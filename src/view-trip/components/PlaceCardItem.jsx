import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    if (place?.place) {
      GetPlaceDetails(place.place).then((res) => setPhotoUrl(res.photo));
    }
  }, [place]);

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${place?.place}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-white shadow-md border-l-4 border-gradient-to-r from-orange-400 to-orange-200 rounded-2xl p-4 flex gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
        <img src={photoUrl} alt={place?.place} className="w-[130px] h-[130px] rounded-xl object-cover" />
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-lg">{place.place}</h2>
          <p className="text-gray-500 text-sm">{place.details}</p>
          <h2 className="text-xs font-medium mt-2">🏷️ Ticket: {place.ticket_pricing}</h2>
        </div>
      </div>
    </a>
  );
}

export default PlaceCardItem;
