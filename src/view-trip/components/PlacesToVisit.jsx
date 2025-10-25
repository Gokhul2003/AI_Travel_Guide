import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  const gradientColors = ["from-orange-400 to-orange-200", "from-pink-400 to-pink-200", "from-indigo-400 to-indigo-200", "from-green-400 to-green-200"];

  return (
    <div className="mb-10">
      <h2 className="font-extrabold text-2xl text-orange-500 mb-8">📍 Places to Visit</h2>

      {trip.tripData?.itinerary.map((dayPlan, index) => (
        <div key={index} className="mb-10 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b rounded-full" style={{background: `linear-gradient(to bottom, #f97316, #fbbf24)`}}></div>
          <div className={`ml-6 flex items-center gap-3`}>
            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${gradientColors[index % gradientColors.length]}`}></div>
            <h2 className="font-bold text-lg text-pink-500">{dayPlan.day}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5 ml-6">
            {dayPlan.plan.map((place, idx) => (
              <div key={idx} className="my-2">
                <h2 className="font-semibold text-sm text-orange-600 mb-2">{place.time}</h2>
                <PlaceCardItem place={place} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlacesToVisit;
