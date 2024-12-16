import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import CSS for Swiper
import 'swiper/css/pagination'; // Import CSS for pagination
import 'swiper/css/navigation'; // Import CSS for navigation
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules'; // Import required Swiper modules
import LP3I1 from '../public/img/lp3i1.jpeg';
import LP3I2 from '../public/img/lp3i2.jpeg';
import LP3I3 from '../public/img/lp3i3.jpeg';
import majelis1 from '../public/img/majelis1.jpeg';
import majelis2 from '../public/img/majelis2.jpeg';
import maulid1 from '../public/img/maulid1.jpeg';
import maulid2 from '../public/img/maulid2.jpeg';
import maulid3 from '../public/img/maulid3.jpeg';
import maulid4 from '../public/img/maulid4.jpeg';
import qurban1 from '../public/img/qurban1.jpeg';
import qurban2 from '../public/img/qurban2.jpeg';
import qurban3 from '../public/img/qurban3.jpeg';
import qurban4 from '../public/img/qurban4.jpeg';
import qurban5 from '../public/img/qurban5.jpeg';
import qurban6 from '../public/img/qurban6.jpeg';

export default function SlideShow() {
  const data = [
    {
      image: majelis1,
      title: 'Majelis Sabilul Khairaat',
      description: 'Majelis Sabilul Khairaat',
    },
    {
      image: majelis2,
      title: 'Majelis Sabilul Khairaat',
      description: 'Majelis Sabilul Khairaat',
    },
    {
      image: maulid1,
      title: 'Maulid Nabi Muhammad SAW',
      description: 'Maulid Nabi Muhammad SAW',
    },
    {
      image: maulid2,
      title: 'Maulid Nabi Muhammad SAW',
      description: 'Maulid Nabi Muhammad SAW',
    },
    {
      image: maulid3,
      title: 'Maulid Nabi Muhammad SAW',
      description: 'Maulid Nabi Muhammad SAW',
    },
    {
      image: maulid4,
      title: 'Maulid Nabi Muhammad SAW',
      description: 'Maulid Nabi Muhammad SAW',
    },
    {
      image: LP3I1,
      title: 'Laporan Taddabur Al-Quran',
      description: 'Laporan Taddabur Al-Quran',
    },
    {
      image: LP3I2,
      title: 'Laporan Taddabur Al-Quran',
      description: 'Laporan Taddabur Al-Quran',
    },
    {
      image: LP3I3,
      title: 'Laporan Taddabur Al-Quran',
      description: 'Laporan Taddabur Al-Quran',
    },
    {
      image: qurban1,
      title: 'Qurban',
      description: 'Qurban',
    },
    {
      image: qurban2,
      title: 'Qurban',
      description: 'Qurban',
    },
    {
      image: qurban3,
      title: 'Qurban',
      description: 'Qurban',
    },
    {
      image: qurban4,
      title: 'Qurban',
      description: 'Qurban',
    },
    {
      image: qurban5,
      title: 'Qurban',
      description: 'Qurban',
    },
    {
      image: qurban6,
      title: 'Qurban',
      description: 'Qurban',
    },
  ];

  return (
    <div className="flex flex-col justify-center px-4 md:px-8 lg:px-16">
      <p className="self-center font-bold text-lg md:text-2xl mt-8 mb-8 text-center">
        Kegiatan Majelis Sabilul Khairaat
      </p>
      <div className="rounded-lg">
        <Swiper
          modules={[Navigation, Pagination]} // Include Swiper modules
          spaceBetween={20} // Adjust spacing between slides
          slidesPerView={1} // Display one slide at a time
          navigation // Enable navigation buttons
          pagination={{ clickable: true }} // Enable pagination dots
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }} // Adjust number of slides based on screen width
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.image}
                className="rounded-lg object-cover"
                alt={item.title}
                placeholder="blur" // Enable placeholder for lazy loading
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image sizes
              />
              <div className="text-center mt-4">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
