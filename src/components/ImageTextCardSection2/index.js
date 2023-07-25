import React from 'react';

const ImageTextCardSection2 = () => {
  return (
    <section className="image-text-card-section bcgd-light-grey">
      <div className="header-and-text with-button">
        <div className="header-part">
          <h2 className="indented-left">
            Is everything okay?<br /><span> Demo</span> Website
          </h2>
        </div>
        <div className="text-part">
          <p style={{ maxWidth: '24em' }}>
            Here, our projects are showcased.<br /><del>Deployment process is not completed</del>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageTextCardSection2;
