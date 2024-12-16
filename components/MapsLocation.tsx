import React from 'react';
import GoogleMapComponent from './GoogleMapComponent';

function MapsLocation() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
      <p className="font-bold text-2xl sm:text-3xl mt-8 mb-8 text-center">
        Lokasi Majelis Sabilul Khairaat
      </p>
      <div className="bg-green-700 rounded-lg p-4 sm:p-8 w-full lg:flex lg:justify-between lg:space-x-8">
        {/* Google Map Component */}
        <div className="w-full lg:w-1/2">
          <GoogleMapComponent />
        </div>

        {/* Address Section */}
        <div className="flex flex-col justify-center bg-green-700 rounded-lg p-4 sm:p-8 w-full lg:w-1/3 mt-4 lg:mt-0">
          <p className="text-white font-bold text-xl sm:text-2xl">Alamat Majelis</p>
          <p className="text-white text-sm sm:text-base">
            Gg. Dewi Sita No.49, Peguyangan Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali 80239
          </p>
        </div>
      </div>
    </div>
  );
}

export default MapsLocation;
