import React from 'react';

const slidesData = [
  {
    url: 'https://marketplace.kunstmatrix.com/product/3d-spaces/modern-400',
    imageUrl: './RAQAMLI DIZAYN/umalika.jpg',
    title: 'Usmonaliyeva | Malika',
    description: 'Yosh rassom | 14 yosh',
  },
  {
    url: 'https://marketplace.kunstmatrix.com/product/3d-spaces/atlas',
    imageUrl: './RAQAMLI DIZAYN/umalika.jpg',
    title: 'Usmonaliyeva | Malika',
    description: 'Yosh rassom | 14 yosh',
  },
  {
    url: 'https://marketplace.kunstmatrix.com/product/3d-spaces/azul',
    imageUrl: './RAQAMLI DIZAYN/umalika.jpg',
    title: 'Usmonaliyeva | Malika',
    description: 'Yosh rassom | 14 yosh',
  },
  {
    url: 'https://marketplace.kunstmatrix.com/product/3d-spaces/moden',
    imageUrl: './RAQAMLI DIZAYN/umalika.jpg',
    title: 'Usmonaliyeva | Malika',
    description: 'Yosh rassom | 14 yosh',
  },
  {
    url: 'https://marketplace.kunstmatrix.com/product/3d-spaces/lumi',
    imageUrl: './RAQAMLI DIZAYN/umalika.jpg',
    title: 'Usmonaliyeva | Malika',
    description: 'Yosh rassom | 14 yosh',
  },
];

const SwiperSection2 = () => {
  return (
    <section className="swiper-section bcgd-light-grey padding-top-zero">
      <div className="swiper space-cards-swiper-1">
        <div className="swiper-wrapper">
          {/* Map over the slidesData array */}
          {slidesData.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="card-image-container">
                <a href={slide.url}>
                  <img alt={slide.title} src={slide.imageUrl} height="100" />
                </a>
              </div>
              <div className="card-info-container">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* If we need pagination */}
        <div className="swiper-pagination space-cards-swiper-1"></div>
      </div>
    </section>
  );
};

export default SwiperSection2;
