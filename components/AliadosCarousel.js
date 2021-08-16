import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import AliadosSlide from './AliadosSlide';

SwiperCore.use([Pagination]);

export default function AliadosCarousel({ data }) {
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
          bulletClass: 'aliadosBullet',
          bulletActiveClass: 'aliadosBullet-active',
        }}
        className="aliadosCarousel"
      >
        {carouselComponents.map((slide) => (
          <SwiperSlide key={slide.fields.identifier}>
            <AliadosSlide
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
