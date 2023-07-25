import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionWithSubheaders from '../components/SectionWithSubheaders';

export default function Conntent() {
  return (
    <div id="content">
      <div id="content-inside" class="container_12 clearfix">
        <div id="main" class="grid_12">
          <div class="content clearfix">
            <HeroSection />
            <SectionWithSubheaders />
          </div>
        </div>
      </div>
    </div>
  );
}
