import React from 'react';
import HeroSection from '../components/HeroSection';
import SwiperSection from '../components/ExhibitionSlider';
import ImageTextSection from '../components/ImageTextSection';
import SectionWithSubheaders from '../components/SectionWithSubheaders';
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
            
          </div>
        </div>
      </div>
    </div>
  );
}
