import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Lazy } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
import { ChevronRight } from "icons/ChevronRight";

SwiperCore.use([Navigation, Autoplay, Lazy]);

export const FeaturedSalesList: FC = () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <article className="w-full h-116 sm:h-112 rounded-t-xl">
      <div
        className="relative px-10 pt-6 w-full flex flex-col gap-16"
        style={{ height: "100%" }}
      >
        <h1 className="text-secondary font-medium text-3xl xl:text-4xl text-center">
          Check out <span className="text-highlight">Vern's</span> hotest sales
        </h1>
        <div className="relative" style={{ height: "80%" }}>
          <Swiper
            className="h-full"
            style={{ width: "90%" }}
            spaceBetween={50}
            slidesPerView={4}
            speed={500}
            lazy={{ loadPrevNext: true }}
            autoplay={{
              delay: 3200,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              776: {
                slidesPerView: 2,
              },
              1111: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: "#prev-test",
              nextEl: "#next-test",
              disabledClass: "filter invert-3/4",
            }}
            onInit={(swiper) => {
              console.log(swiper.autoplay);
              swiper.autoplay?.start();
            }}
          >
            {x.map(() => (
              <SwiperSlide>
                <div
                  className="w-50 max-h-full grid overflow-hidden gap-1"
                  style={{ gridTemplateRows: "75% 25%" }}
                >
                  <img
                    className="w-full h-full"
                    src="/images/featured/p-rugosus.jpg"
                    alt=""
                  />
                  <div className="">
                    <h1 className="text-secondary font-medium">
                      Pogonomyrmex rugosus
                    </h1>
                    <p className="text-secondary text-sm font-medium mt-2">
                      <strong className="text-highlight">$30</strong> per queen
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            id="prev-test"
            className="absolute -left-2 transform -translate-y-1/2 z-50 text-highlight"
            style={{ top: "40%" }}
          >
            <ChevronRight customTwClass="transform rotate-180" />
          </button>
          <button
            id="next-test"
            className="absolute -right-2 transform -translate-y-1/2 z-50 text-highlight"
            style={{ top: "40%" }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </article>
  );
};
