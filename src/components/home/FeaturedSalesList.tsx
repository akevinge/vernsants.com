import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Lazy } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
import { ChevronRight } from "icons/ChevronRight";

SwiperCore.use([Navigation, Autoplay, Lazy]);

export const FeaturedSalesList: FC = () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <article className="w-full h-116 sm:h-112 bg-black bg-opacity-50 rounded-t-xl">
      <div
        className="relative px-10 pt-6 w-full flex flex-col gap-8"
        style={{ height: "90%" }}
      >
        <h1 className="text-secondary text-2xl">
          Check out Vern's hotest sales
        </h1>

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
                    $30 per queen
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button id="prev-test" className="absolute -bottom-5 left-16 z-50">
          <ChevronRight customTwClass="filter invert transform rotate-180" />
        </button>
        <button id="next-test" className="absolute -bottom-5 right-16 z-50">
          <ChevronRight customTwClass="filter invert" />
        </button>
      </div>
    </article>
  );
};
