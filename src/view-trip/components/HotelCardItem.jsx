import React, { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    if (hotel?.name) {
      GetPlaceDetails(hotel.name).then((res) => setPhotoUrl(res.photo));
    }
  }, [hotel]);

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${hotel?.name},${hotel?.address}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
        <img src={photoUrl} className="h-[180px] w-full object-cover" />
        <div className="p-4 flex flex-col gap-1">
          <h2 className="font-semibold text-lg">{hotel?.name}</h2>
          <h2 className="text-gray-500 text-xs">📍 {hotel?.address}</h2>
          <h2 className="text-sm">💰 {hotel?.price}</h2>
          <h2 className="text-sm">⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </a>
  );
}

export default HotelCardItem;
