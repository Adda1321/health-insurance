import React, { useEffect, useState } from "react";
import HeadingLine from "../../assets/HeadingLine.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/data";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import FeatureSlider from "../../shared/FeatureSlider";
import WordStyled from "../../shared/WordStyled";

SwiperCore.use([Navigation]);
function UserReviewsComponent() {
  const [swiperOne, setSwiperOne] = useState();
  const [swiperTwo, setSwiperTwo] = useState();
  const [userReviewsCount, setUserReviewCount] = useState(4);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width:  1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  }); // Check for tablet-sized screens
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); // Check for mobile screens

  useEffect(() => {
    if (isDesktopOrLaptop) {
      console.log("isDesktopOrLaptop");
      setUserReviewCount(4);
    } else if (isTablet) {
      // Check for tablets
      console.log("isTablet");
      setUserReviewCount(3); // Adjust the count for tablets as needed
    } else if (isBigScreen) {
      console.log("isBigScreen");
      setUserReviewCount(4);
    } else if (isMobile) {
      console.log("isMobile");
      setUserReviewCount(1.3);
    }
  }, [isBigScreen, isDesktopOrLaptop, isTablet, isMobile]);
  const handleNextClick = () => {
    swiperOne.slideNext();
    swiperTwo.slideNext();
  };
  const handlePrevClick = () => {
    swiperOne.slidePrev();
    swiperTwo.slidePrev();
  };

  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col  w-full h-full">
        <div className="px-4 sm:px-48">
          <div className="xl:w-full sm:w-[500px] ">
            <h1 className="text-[#06283D] tracking-tight md:leading-tight font-bold font-OutFit text-lg  lg:text-xl xl:text-3xl">
              See W<WordStyled id="our_user" word="hat Our Users " />
              <span>
                <div className="w-full sm:flex justify-end px-10 -mb-6 hidden"></div>
              </span>{" "}
              Are Saying
            </h1>
            <div className="w-full flex md:hidden justify-end px-10 -mb-6"></div>
          </div>
          <div className="w-full md:flex justify-end gap-x-5 hidden  ">
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#1D6996] hover:bg-[#1a5e87] duration-150 flex items-center justify-center"
              onClick={handlePrevClick}
            >
              <MdKeyboardArrowLeft size={50} className="text-white" />
            </button>
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#47A5DC] hover:bg-[#3f94c6] duration-150 flex items-center justify-center"
              onClick={handleNextClick}
            >
              <MdKeyboardArrowRight size={50} className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col mb-12 sm:mb-40">
          <div className="w-full flex gap-x-10  lg: ml-16 sm: ml:8 relative ">
            <Swiper
              slidesPerView={userReviewsCount}
              loop={true}
              rewind={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setSwiperOne(swiper)}
              navigation={true}
              className="w-full  flex gap-x-10 relative -left-1"
              noSwiping={true}
            > 
              {data?.UsersReview1?.map((userReview, index) => (
                <SwiperSlide className="w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px] py-4">
                  <FeatureSlider userReview={userReview} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex gap-x-10  mb-10 relative">
            <Swiper
              spaceBetween={70}
              slidesPerView={userReviewsCount}
              loop={true}
              rewind={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setSwiperTwo(swiper)}
              navigation={true}
              className="w-full flex gap-x-10  relative -left-1 "
            >
              {data?.UsersReview2?.map((userReview, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px] pb-4"
                >
                  <FeatureSlider userReview={userReview} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full my-4 flex justify-center md:justify-end gap-x-5 md:hidden  ">
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#1D6996] hover:bg-[#1a5e87] duration-150 flex items-center justify-center"
              onClick={handlePrevClick}
            >
              <MdKeyboardArrowLeft size={50} className="text-white" />
            </button>
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#47A5DC] hover:bg-[#3f94c6] duration-150 flex items-center justify-center"
              onClick={handleNextClick}
            >
              <MdKeyboardArrowRight size={50} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserReviewsComponent;
