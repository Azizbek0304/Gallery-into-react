import React from 'react';

const SwiperSection = () => {
  const exhibitions = [
    {
      id: 1,
      title: 'Apollo Art Gallery',
      imageSrc:
        'https://artspaces.kunstmatrix.com/sites/artspaces.kunstmatrix.com/files/styles/cropped_medium/public/exhibitions/60711/edm-01.jpg?itok=yNSe3L_v',
      altText: '2023 台中藝術博覽會 | 阿波羅畫廊 1011房 | 2023.07.14-16',
      date: '14 Jul 2023 – 16 Jul 2023',
      description: '2023 Gallery',
    },
    // Add other exhibition objects here...
  ];

  return (
    <section className="swiper-section bcgd-light-grey">
      <div id="exhib_swiper_1" className="swiper exhib-swiper-1">
        <div className="swiper-wrapper">
          {exhibitions.map((exhibition) => (
            <div
              key={exhibition.id}
              className="swiper-slide node-exhibition node-teaser"
            >
              <div className="content">
                <div className="exhib-image">
                  <a className="exhib-enter" href="./en.html">
                    <span className="visit-exhibition">visit</span>
                  </a>
                  <img alt={exhibition.altText} src={exhibition.imageSrc} />
                </div>
                <div className="exhib-info">
                  <h2>{exhibition.title}</h2>
                  <p className="exhib-title">{exhibition.date}</p>
                  <p className="exhib-duration">{exhibition.date}</p>
                  <p className="exhib-description">{exhibition.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination exhib-swiper-1"></div>
      </div>
      <div className="swiper-button-prev exhib-swiper-1 km-icon-left-small swiper-arrow"></div>
      <div className="swiper-button-next exhib-swiper-1 km-icon-right-small swiper-arrow"></div>
      <div style={{ textAlign: 'center', marginTop: '2em' }}>
        <a
          className="btn-primary btn-primary-accent btn-medium"
          href="./en.html"
        >
          Barcha Loyihalar<i className="km-icon-right li-icon-trailing"></i>
        </a>
      </div>
    </section>
  );
};

export default SwiperSection;
