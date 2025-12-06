import React from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/image-1.jpg';
import img2 from '../../assets/image-2.jpg';
import img3 from '../../assets/image-3.jpg';
import PopularSection from './HomeSection/PopularSection';
import MeetOurVets from './HomeSection/MeetOurVets';



const Home = () => {
    return (
        <div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img className='w-full h-[500px] object-cover' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[500px] object-cover' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[500px] object-cover' src={img3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <PopularSection></PopularSection>
            <MeetOurVets></MeetOurVets>

        </div>
        
            
        
        
    );
};

export default Home;