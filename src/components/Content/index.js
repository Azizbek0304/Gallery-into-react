import React from 'react';
import HeroSection from '../components/HeroSection';
import FollowUS from '../components/FollowUs';
import GallerySection from '../components/GallerySection';
import SwiperSection1 from '../components/ExhibitionSlider';
import SwiperSection2 from '../components/ExhibitionSwiper';
import SwiperPricingSection from '../components/SwiperPricingSection';
import PricingDisclaimerSection from '../components/PricingDisclaimerSection';
import ImageTextSection1 from '../components/ImageTextSection1';
import ImageTextSection2 from '../components/ImageTextSection2';
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

            <SwiperSection1 />

            <ImageTextSection1 />

            <SwiperPricingSection />

            <PricingDisclaimerSection />

            {/* <ImageTextCardSection /> */}

            {/* <MiddleSwiperSection /> */}

            <GallerySection />

            <SwiperSection2 />

            <ImageTextSection2 />

            <FollowUS />
          </div>
        </div>
      </div>
    </div>
  );
}
