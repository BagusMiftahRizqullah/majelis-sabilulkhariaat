import React from 'react'
import GoogleMapComponent from './GoogleMapComponent'

function MapsLocation() {
  return (
    <div className='flex flex-col items-center'>
        <p className='font-bold text-2xl mt-8 mb-8'>Location Majelis Sabilull khairaat</p>
        <div className='bg-green-700 rounded-lg p-8 flex flex-row justify-between'>
                <GoogleMapComponent/>
        
            <div className='justify-center m-8 p-8 flex flex-col bg-green-700 rounded-lg'>
                <p className='text-white font-bold text-2xl'>Alamat Majelis</p>
                <p className='text-white'>Gg. Dewi Sita No.49, Peguyangan Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali 80239</p>
            </div>
        </div>
    </div>
  )
}

export default MapsLocation