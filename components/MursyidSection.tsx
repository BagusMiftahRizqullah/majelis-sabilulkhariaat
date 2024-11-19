import React from 'react'
import Image from 'next/image';
import Mursyid from '../public/img/section-mursyid.png';

function MursyidSection() {
  return (
    <div className="flex flex-col justify-center px-16 py-20 max-md:px-5">
    <div className="mt-8 max-md:mr-1 max-md:max-w-full">
      <div className="flex">
        <div className="flex flex-row justify-center w-6/12 max-md:ml-0 max-md:w-full">
        <Image
              src={Mursyid}
              width="250"
              height="100"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
        
        </div>
        <div className="flex flex-row justify-center w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-zinc-900 max-md:mt-10 max-md:max-w-full">
      
            <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Syeikh Fahmi Attamimi
            </div>
            <div className="mt-6 text-lg leading-7 max-md:max-w-full">
              Mursyid Thariqoh Fahamiyyah dan pengurus majeliis taddabur alquran sabilul khairaat denpasar bali indonesia.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MursyidSection