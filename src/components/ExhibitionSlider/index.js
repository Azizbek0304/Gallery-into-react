import React from 'react';

const SwiperSection1 = () => {
  const exhibitionsData = [
    {
      id: 1,
      imageSrc:
        'https://artspaces.kunstmatrix.com/sites/artspaces.kunstmatrix.com/files/styles/cropped_medium/public/exhibitions/60711/edm-01.jpg?itok=yNSe3L_v',
      title: 'Apollo Art Gallery',
      subtitle: '2023',
      duration: '14 Jul 2023 – 16 Jul 2023',
      description: '2023 Gallery',
    },
    {
      id: 2,
      imageSrc:
        'https://artspaces.kunstmatrix.com/sites/artspaces.kunstmatrix.com/files/styles/cropped_medium/public/exhibitions/33840/apple_6.png?itok=6FluLQCl',
      title: 'E / VP D STUDIO',
      subtitle: 'LANDSCAPE',
      duration: '',
      description: '',
    },
    {
      id: 3,
      imageSrc:
        'https://artspaces.kunstmatrix.com/sites/artspaces.kunstmatrix.com/files/styles/cropped_medium/public/exhibitions/41863/image_accueil.png?itok=ivMXR_fJ',
      title: 'Alfredus',
      subtitle: '2023',
      duration: '',
      description: '',
    },
    {
      id: 4,
      imageSrc:
        'https://artspaces.kunstmatrix.com/sites/artspaces.kunstmatrix.com/files/styles/cropped_medium/public/exhibitions/64906/dovous_1.png?itok=KW_ayc6U',
      title: 'Parus Albert Schaeffer',
      subtitle: 'Dovous - The rest is silence',
      duration: '',
      description: 'Gallaery',
    },
    {
      id: 5,
      imageSrc:
        'https://artspaces.kunstmatrix.com/sites/artspaces.kunstmatrix.com/files/styles/cropped_medium/public/exhibitions/72574/linnea_moody_thumbnail.png?itok=lu4Q12ef',
      title: 'Women Gallaery',
      subtitle: '3D Gallaery',
      duration: '11 Jul 2023 – 24 Jul 2023',
      description: 'Gallaery',
    },
    {
      id: 6,
      imageSrc:
        'https://artspaces.kunstmatrix.com/sites/artspaces.kunstmatrix.com/files/styles/cropped_medium/public/exhibitions/94837/dscf0049_dxo.jpg?itok=8iYJ4HeG',
      title: 'Andrei Prodan',
      subtitle: 'Discover the Danube Delta, Romania',
      duration: '',
      description:
        "This is an exhibition and an invitation to discover the Europe's Paradise, the Danube Delta, from Romania.",
    },
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

export default SwiperSection1;
