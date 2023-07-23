import React from 'react';
import BurgerMenu from '../components/BurgerMenu';
import SkipLink from '../components/SkipLink';

export default function PageWrapper() {
  return (
    <div id="page-wrapper">
      <BurgerMenu />
      <SkipLink />
    </div>
  );
}
