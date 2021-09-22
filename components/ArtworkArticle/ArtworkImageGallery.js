import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

import SwiperCore, { Thumbs } from 'swiper/core';

SwiperCore.use([Thumbs]);

export default function ArtworkImageGallery({ data }) {
  const { artworkPictures } = data.fields;
  const numberPictures = artworkPictures.length;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="artworkImageGallery__container">
        <Swiper
          style={{
            '--swiper-pagination-color': '#f0e9e5',
          }}
          spaceBetween={1}
          speed={600}
          thumbs={{ swiper: thumbsSwiper }}
          className="artworkImageGallery__slides"
        >
          {artworkPictures.map((image) => (
            <SwiperSlide key={image.fields.title}>
              <section className="artworkImageGallery__slide">
                <img
                  className="artworkImageGallery__slides--image"
                  src={image.fields.file.url}
                  alt={image.fields.title}
                />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          freeMode={false}
          loop={false}
          preventInteractionOnTransition
          touchReleaseOnEdges
          spaceBetween={1}
          slidesPerView={numberPictures}
          className="artworkImageGallery__navigation"
        >
          {artworkPictures.map((image) => (
            <SwiperSlide key={image.fields.title}>
              <section className="artworkImageGallery__thumbs">
                <img
                  className="artworkImageGallery__thumbs--item"
                  src={image.fields.file.url}
                  alt={image.fields.title}
                />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
