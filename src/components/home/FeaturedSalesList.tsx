import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Lazy } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
import { ChevronRight } from "icons/ChevronRight";
import { listings } from "../../lib/listings";

SwiperCore.use([Navigation, Autoplay, Lazy]);

export const FeaturedSalesList: FC = () => {
  const [useAbbr, setUseAbbr] = useState(false);

  const onResize = () => {
    if (window.innerWidth < 700) {
      setUseAbbr(true);
    } else {
      setUseAbbr(false);
    }
  };
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <article className="w-full rounded-t-xl">
      <div className="relative px-10 pt-6 w-full flex flex-col gap-16">
        <h1 className="text-secondary font-medium text-3xl xl:text-4xl text-center">
          Check out <span className="text-highlight">Vern&apos;s</span> hottest
          sales
        </h1>
        {listings.length > 4 ? (
          <div className="relative">
            <Swiper
              autoHeight
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
                600: {
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
              {listings
                .sort((a, b) =>
                  a.inStock && b.inStock ? 1 : a.inStock && !b.inStock ? -1 : 0
                )
                .map(
                  (
                    { species, genus, price, imgUrl, desc, extra, inStock },
                    i
                  ) => (
                    <SwiperSlide key={species + i}>
                      <div
                        className="w-64 max-h-full grid overflow-hidden gap-3"
                        style={{ gridTemplateRows: "70% 35%" }}
                      >
                        <div className="w-52 h-72 flex justify-center items-center bg-primary-light">
                          <img className="w-full" src={imgUrl} alt="" />
                        </div>
                        <div className="">
                          <h1 className="text-highlight font-medium whitespace-nowrap overflow-ellipsis">
                            {!useAbbr
                              ? `${genus} ${species}`
                              : `${genus.charAt(0)}. ${species}`}
                          </h1>
                          <div className="flex flex-col">
                            <span className="text-secondary text-sm font-medium mt-2">
                              {desc}
                            </span>
                            <span className="text-secondary text-sm font-medium mt-2">
                              <strong className="text-secondary">{`$${price}`}</strong>
                            </span>
                            {extra && (
                              <h1 className="text-xs text-red-400 font-medium mt-2">{`${extra}`}</h1>
                            )}
                            {inStock && (
                              <h1 className="text-xs text-blue-500 font-bold mt-2">
                                In Stock!
                              </h1>
                            )}
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
            {listings
              .sort((a, b) =>
                a.inStock && b.inStock ? 1 : a.inStock && !b.inStock ? -1 : 0
              )
              .map(
                (
                  { imgUrl, species, genus, price, desc, extra, inStock },
                  i
                ) => (
                  <li
                    key={species + genus + imgUrl + i.toString() + desc}
                    className="flex flex-col gap-2"
                  >
                    <div className="w-52 h-72 flex justify-center items-center bg-primary-light">
                      <img className="w-full" src={imgUrl} alt="" />
                    </div>
                    <h1 className="text-sm text-highlight font-medium">
                      {!useAbbr
                        ? `${genus} ${species}`
                        : `${genus.charAt(0)}. ${species}`}
                    </h1>
                    <h1 className="text-xs text-secondary font-medium">
                      {desc}
                    </h1>
                    <h1 className="text-xs text-secondary font-medium">{`$${price}`}</h1>
                    {extra && (
                      <h1 className="text-xs text-red-400 font-medium mt-2">{`${extra}`}</h1>
                    )}
                    {inStock && (
                      <h1 className="text-xs text-blue-500 font-bold mt-2">
                        In Stock!
                      </h1>
                    )}
                  </li>
                )
              )}
          </ul>
        )}
      </div>
    </article>
  );
};
