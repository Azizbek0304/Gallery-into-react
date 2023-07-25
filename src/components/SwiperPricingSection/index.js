import React from "react";

const SwiperPricingSection = () => {
  return (
    <section className="swiper-section swiper-pricing-section bcgd-light-grey">
      <div className="swiper pricing-swiper">
        {/* Add your swiper content here */}
      </div>
      {/* If we need pagination */}
      <div className="swiper-pagination pricing-swiper"></div>
      {/* If we need navigation buttons */}
      <div className="swiper-button-prev pricing-swiper km-icon-left-small swiper-arrow"></div>
      <div className="swiper-button-next pricing-swiper km-icon-right-small swiper-arrow"></div>
    </section>
  );
};

export default SwiperPricingSection;
