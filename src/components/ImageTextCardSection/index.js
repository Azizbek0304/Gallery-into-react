import React from "react";

const ImageTextCardSection = () => {
  return (
    <section className="image-text-card-section">
      <div className="header-and-text with-button">
        <div className="header-part">
          <h2>
            Start with handpicked<span> included</span> 3D spaces.
          </h2>
        </div>
        <div className="text-part">
          <p>
            KUNSTMATRIX 3D spaces use highly optimized designs for optimal performance. We focus on neutral spaces that put your art in the foreground, and are intuitive and easy to use.
          </p>
          <a className="btn-primary btn-medium" href="https://artspaces.kunstmatrix.com/en/includedspaces">View included spaces<i className="km-icon-right li-icon-trailing"></i></a>
        </div>
      </div>
    </section>
  );
};

export default ImageTextCardSection;
