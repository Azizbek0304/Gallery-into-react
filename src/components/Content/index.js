import React from 'react';
import HeroSection from '../components/HeroSection';
import SwiperSection from '../components/ExhibitionSlider';
import SwiperPricingSection from '../components/SwiperPricingSection';
import PricingDisclaimerSection from '../components/PricingDisclaimerSection';
import ImageTextSection from '../components/ImageTextSection';
import MiddleSwiperSection from '../components/MiddleSwiperSection';
import SectionWithSubheaders from '../components/SectionWithSubheaders';
import ImageTextCardSection from '../components/ImageTextCardSection';
import MadeWithKunstmatrix from '../components/MadeWithKunstmatrix  ';

export default function Conntent() {
  return (
    <div id="content">
      <div id="content-inside" class="container_12 clearfix">
        <div id="main" class="grid_12">
          <div class="content clearfix">
            <HeroSection />

            <SectionWithSubheaders />

            <MadeWithKunstmatrix />

            <SwiperSection />

            <ImageTextSection />

            <SwiperPricingSection />

            <PricingDisclaimerSection />

            {/* <ImageTextCardSection /> */}

            {/* <MiddleSwiperSection /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
