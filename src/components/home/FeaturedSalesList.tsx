import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Lazy } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
import { ChevronRight } from "icons/ChevronRight";
import { listings } from "../../lib/listings";

SwiperCore.use([Navigation, Autoplay, Lazy]);

export const FeaturedSalesList: FC = () => {
  const inStockListings = listings.filter(({ inStock }) => inStock === true);
  const displaySlider = inStockListings.length > 4;
  return (
    <article
      className={`w-full rounded-t-xl ${displaySlider && "h-116 sm:h-112"}`}
    >
      <div
        className="relative px-10 pt-6 w-full flex flex-col gap-16"
        style={{ height: "100%" }}
      >
        <h1 className="text-secondary font-medium text-3xl xl:text-4xl text-center">
          Check out <span className="text-highlight">Vern&apos;s</span> hottest
          sales
        </h1>
        {displaySlider ? (
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
                  slidesPerView: 5,
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
              {inStockListings.map(
                ({ species, genus, price, imgUrl, desc }, i) => (
                  <SwiperSlide key={species + i}>
                    <div
                      className="w-50 max-h-full grid overflow-hidden gap-1"
                      style={{ gridTemplateRows: "75% 25%" }}
                    >
                      <div className="w-52 h-72 flex justify-center items-center bg-primary-light">
                        <img className="w-full" src={imgUrl} alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-highlight font-medium">
                          {`${genus} ${species}`}
                        </h1>
                        <div className="flex flex-col">
                          <span className="text-secondary text-sm font-medium mt-2">
                            {desc}
                          </span>
                          <span className="text-secondary text-sm font-medium mt-2">
                            <strong className="text-secondary">{`$${price}`}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
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
        ) : (
          <ul className="list-none flex gap-10 flex-wrap justify-center px-20">
            {inStockListings.map(
              ({ imgUrl, species, genus, price, desc }, i) => (
                <li
                  key={species + genus + imgUrl + i.toString() + desc}
                  className="flex flex-col gap-2"
                >
                  <div className="w-52 h-72 flex justify-center items-center bg-primary-light">
                    <img className="w-full" src={imgUrl} alt="" />
                  </div>
                  <h1 className="text-sm text-highlight font-medium">{`${genus} ${species}`}</h1>
                  <h1 className="text-xs text-secondary font-medium">{desc}</h1>
                  <h1 className="text-xs text-secondary font-medium">{`$${price}`}</h1>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </article>
  );
};
