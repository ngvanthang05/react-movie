import { Swiper, SwiperSlide } from "swiper/react";
import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import { Pagination } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect, useState } from "react";
import { get } from "../services/apis";

const Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await get('banner-list/slideshow/2')
        setBanners(res.banners)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      slidesPerView={1}

    >
      {banners?.map((banner) => (
        <SwiperSlide>
          <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative">
            <div className="w-full h-full bg-black/40 " />
            <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
              <div className="md:w-[50%] w-full ">
                <div className="flex flex-col space-y-6 items-start p-10">
                  <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6">
                    TV Show
                  </p>
                  <div className="flex flex-col space-y-4">
                    <h1 className="text-[40px] font-bold text-white ">
                      Nghe nói em thích tôi
                    </h1>
                    <div className="flex items-center space-x-3">
                      <img src={IconRating} alt="rating" className="w-8 h-8" />
                      <img src={IconRating} alt="rating" className="w-8 h-8" />
                      <img src={IconRating} alt="rating" className="w-8 h-8" />
                      <img src={IconRating} alt="rating" className="w-8 h-8" />
                      <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                    </div>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting.
                    </p>
                  </div>

                  <div className="flex items-center space-x-5">
                    <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                      Chi tiết
                    </button>
                    <button className="py-2 px-3 bg-red-600 text-white font-bold">
                      Xem Phim
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      ))}

      <SwiperSlide>
        <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative">
          <div className="w-full h-full bg-black/40 " />
          <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
            <div className="md:w-[50%] w-full ">
              <div className="flex flex-col space-y-6 items-start p-10">
                <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6">
                  TV Show
                </p>
                <div className="flex flex-col space-y-4">
                  <h1 className="text-[40px] font-bold text-white ">
                    Nghe nói em thích tôi
                  </h1>
                  <div className="flex items-center space-x-3">
                    <img src={IconRating} alt="rating" className="w-8 h-8" />
                    <img src={IconRating} alt="rating" className="w-8 h-8" />
                    <img src={IconRating} alt="rating" className="w-8 h-8" />
                    <img src={IconRating} alt="rating" className="w-8 h-8" />
                    <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                  </div>
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting.
                  </p>
                </div>

                <div className="flex items-center space-x-5">
                  <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                    Chi tiết
                  </button>
                  <button className="py-2 px-3 bg-red-600 text-white font-bold">
                    Xem Phim
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>

  );
};

export default Banner;
