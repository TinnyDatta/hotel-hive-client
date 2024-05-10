
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[])
    return (
        <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide1.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[35%] lg:top-[30%] sm:left-[15%] md:left-[20%] lg:left-[25%] text-5xl font-semibold text-white ">Single Room with<span className='text-[#e9967afa]'>Ocean View</span></h2>
            <p className='text-5xl font-medium text-base-100 absolute sm:top-[25%] md:top-[30%] lg:top-[40%] sm:left-[20%] md:left-[25%] lg:left-[30%]'>Best price guaranteed</p>
            <p className='text-2xl font-semibold text-base-100 absolute sm:top-[35%] md:top-[45%] lg:top-[50%] sm:left-[10%] md:left-[15%] lg:left-[5%]'>For Choosing hotel room, our main concerns are <span className='text-3xl font-extrabold text-[#e9967a9a]'>Comfort</span> and <span className='text-3xl font-extrabold text-[#e9967ade]'>Budget</span>. We have a variety of price and area ranges so that people of all background can stay anywhere comfortably.</p>
            <p className='text-2xl font-semibold text-[#e9967afb] px-4 mt-4 bg-[#FFE4B5] absolute sm:top-[45%] md:top-[65%] lg:top-[65%] sm:left-[10%] md:left-[15%] lg:left-[35%]'>Slide to see some nice demos</p>
           </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide2.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[45%] lg:top-[30%] sm:left-[20%] md:left-[30%] lg:left-[35%] text-3xl font-semibold bg-[#FFE4B5] text-[#e9967afb] lg:px-3 ">A peaceful and awesome room? </h2>
            <p className='text-2xl  bg-[#FFE4B5] text-[#e9967afb] absolute sm:top-[25%] md:top-[35%] lg:top-[40%] sm:left-[10%] md:left-[15%] lg:left-[35%]'>Where one can live as like their own home.</p>
            </div>
           </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide3.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[45%] lg:top-[30%] sm:left-[25%] md:left-[25%] lg:left-[25%] text-2xl font-semibold bg-[#FFE4B5] text-[#e9967afb] lg:px-3 ">HotelHive have some outstanding luxury room. </h2>
            <p className='text-2xl  bg-[#FFE4B5] text-[#e9967afb] absolute sm:top-[15%] md:top-[35%] lg:top-[45%] sm:left-[10%] md:left-[15%] lg:left-[25%]'>One can enjoy these room paying a large amount. </p>
            </div>
           </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className='relative' data-aos = "zoom-in">
           <img className=' lg:w-[1152px] h-[500px] rounded-xl bg-opacity-100 opacity-100' src="/images/slide4.jpg" alt="" /> 
           <div>
            <h2 className="absolute sm:top-[15%] md:-top[45%] lg:top-[55%] sm:left-[15%] md:left-[5%] lg:left-[25%] text-2xl font-semibold bg-[#FFE4B5] text-[#e9967afb] lg:px-3 ">These are the best apartments of the city </h2>
            <p className='text-2xl  bg-[#FFE4B5] text-[#e9967afb] absolute sm:top-[25%] md:top-[35%] lg:top-[70%] sm:left-[10%] md:left-[5%] lg:left-[25%]'>Ensure your comfort by selecting apartments.</p>
            </div>
           </div>
        </SwiperSlide>
    
    </Swiper>
        </div>
    );
};

export default Banner;