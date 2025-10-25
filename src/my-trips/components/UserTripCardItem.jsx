import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    trip && fetchPlacePhoto();
  }, [trip]);

  const fetchPlacePhoto = async () => {
    try {
      const result = await GetPlaceDetails(trip?.userSelection?.location?.label);
      setPhotoUrl(result.photo || "/placeholder.jpg");
    } catch (err) {
      console.error(err);
      setPhotoUrl("/placeholder.jpg");
    }
  };

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className='hover:scale-105 transition-all'>
        <img src={photoUrl} alt="" className='object-cover rounded-xl h-[220px]' />
        <div>
          <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
          <h2 className='text-sm text-gray-500'>
            {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} budget.
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
