import React from 'react';
import BurgerMenu from '../BurgerMenu';
import SkipLink from '../SkipLink';
import Content from '../Content';

export default function PageWrapper() {
  return (
    <div id="page-wrapper">
      <BurgerMenu />
      <SkipLink />
      {/* <Content /> */}
    </div>
  );
}
