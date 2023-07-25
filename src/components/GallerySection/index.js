import React from 'react';

const GallerySection = () => {
  return (
    <section className="bcgd-light-grey" style={{ paddingBottom: '2em' }}>
      <div className="centered-header">
        <h2 style={{ maxWidth: '17em' }}>
          3D Gallery<span> Let's Explore</span>.
        </h2>
        <p style={{ maxWidth: '33em' }}>You can get a brief introduction about our talented artists.</p>
        <a className="btn-primary btn-medium" href="/en.html">
          About Us <i className="li-icon li-icon-trailing km-icon-right"></i>
        </a>
      </div>

      <div className="image-text-card-container">
        <a href="https://marketplace.kunstmatrix.com/">
          <img loading="lazy" src="./RAQAMLI DIZAYN/malika.jpg" alt="marketplace spaces" />
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
