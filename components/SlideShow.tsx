import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import CSS for Swiper
import 'swiper/css/pagination'; // Import CSS for pagination
import 'swiper/css/navigation'; // Import CSS for navigation
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules'; // Import required Swiper modules
import LP3I1 from '../public/img/lp3i1.jpeg';
import LP3I2 from '../public/img/lp3i2.jpeg';
import LP3I3 from '../public/img/lp3i3.jpeg';

export default function SlideShow() {
  return (
    <div className='w-full p-[200px] items-center'>
        <Swiper
        modules={[Navigation, Pagination]} // Include Swiper modules
        spaceBetween={30} // Adjust spacing between slides
        slidesPerView={1} // Display one slide at a time
        navigation // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination dots
        style={{ width: '100%', height: 'auto', alignItems: 'center' }} // Add responsive styles
        >
        <SwiperSlide>
            <Image
            style={{  alignItems: 'center' }}
            src={LP3I1}
            width={800} // Adjust the width based on your layout
            height={400} // Adjust the height based on your layout
            alt="Slide 1 - LP3I Campus 1"
            placeholder="blur" // Enable placeholder for lazy loading
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
            src={LP3I2}
            width={800}
            height={400}
            alt="Slide 2 - LP3I Campus 2"
            placeholder="blur"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
            src={LP3I3}
            width={800}
            height={400}
            alt="Slide 3 - LP3I Campus 3"
            placeholder="blur"
            />
        </SwiperSlide>
        </Swiper>
    </div>
  );
}
