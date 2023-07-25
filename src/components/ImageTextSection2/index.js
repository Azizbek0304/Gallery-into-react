import React from 'react';

const ImageTextSection2 = () => {
  const bulletPoints = [
    {
      icon: 'li-icon km-icon-enlarge',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel vitae fuga aspernatur sint iure quas.',
    },
    {
      icon: 'li-icon km-icon-artist',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestias earum modi ut quae aliquid possimus.',
    },
  ];

  return (
    <section className="image-text-section bcgd-light-grey">
      <div className="image-text-container">
        <div className="image-text image">
          <img loading="lazy" src="./RAQAMLI DIZAYN/jamila.jpg" alt="" />
        </div>
        <div className="image-text text">
          <h2>
            About Our <span>Young</span> Artists.
          </h2>
          <ul className="bullet-list">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bullet-point">
                <i className={point.icon}></i>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
          <a className="btn-primary btn-medium" href="/dilmurod">
            More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection2;
