import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import AlliesSlide from './AlliesSlide';

SwiperCore.use([Pagination]);

export default function AlliesCarousel({ data }) {
  const { carouselComponents } = data[0].fields;
  const { brandLogos } = data[0].fields;

  return (
    <>
      <Swiper
        speed={600}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletElement: 'span',
          bulletClass: 'alliesBullet',
          bulletActiveClass: 'alliesBullet-active',
        }}
        className="alliesCarousel"
      >
        {carouselComponents.map((slide) => (
          <SwiperSlide key={slide.fields.identifier}>
            <AlliesSlide
              key={slide.fields.identifier}
              brandLogos={brandLogos}
              slideInfo={slide.fields}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide />
      </Swiper>
    </>
  );
}
