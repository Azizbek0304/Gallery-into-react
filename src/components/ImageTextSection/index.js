import React from 'react';

const ImageTextSection = () => {
  return (
    <section className="image-text-section">
      <div className="image-text-container reverse">
        <div className="image-text image">
          <img
            loading="lazy"
            src="./RAQAMLI DIZAYN/umida.jpg"
            alt="Create exhibitions within minutes"
          />
        </div>
        <div className="image-text text">
          <h2 style={{ maxWidth: '12em' }}>
            Bizing<span> #Yosh</span> rassomlar haqida.
          </h2>
          <ul className="bullet-list">
            <li className="bullet-point">
              <i className="li-icon km-icon-art-spaces"></i>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus eaque asperiores veritatis minus reiciendis ipsam
                necessitatibus earum ad beatae enim!
              </span>
            </li>
            <li className="bullet-point">
              <i className="li-icon km-icon-add"></i>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt blanditiis distinctio corrupti atque. Consectetur
                maxime cupiditate quas rem?
              </span>
            </li>
            <li className="bullet-point">
              <i className="li-icon km-icon-embed"></i>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis totam illo quaerat quasi ab debitis dignissimos odio
                porro?
              </span>
            </li>
          </ul>
          <a className="btn-primary btn-medium" href="./en.html">
            More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
