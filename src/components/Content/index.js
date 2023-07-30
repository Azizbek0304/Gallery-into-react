import React from 'react';
import HeroSection from '../HeroSection';
import FollowUS from '../FollowUs';
import GallerySection from '../GallerySection';
import SwiperSection1 from '../ExhibitionSlider';
import SwiperSection2 from '../ExhibitionSwiper';
import SwiperPricingSection from '../SwiperPricingSection';
import PricingDisclaimerSection from '../PricingDisclaimerSection';
import ImageTextSection1 from '../ImageTextSection1';
import ImageTextSection2 from '../ImageTextSection2';
import MiddleSwiperSection from '../components/MiddleSwiperSection';
import SectionWithSubheaders from '../SectionWithSubheaders';
import ImageTextCardSection from '../components/ImageTextCardSection';
import MadeWithKunstmatrix from '../MadeWithKunstmatrix  ';

export default function Content() {
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
