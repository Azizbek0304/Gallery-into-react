import React from 'react';
import { Helmet } from 'react-helmet-async';

const Header = () => {
  return (
    <header id="appchoice" className="clearfix">
      <Helmet>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          Shadowbox.path = "/sites/all/libraries/shadowbox/";
        `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          jQuery.extend(Drupal.settings, {
            // ... Your Drupal settings here ...
          });
        `,
          }}
        />
      </Helmet>
      <div id="appchoice-wrapper" className="container-12 clearfix">
        {/* Logo */}
        <ul className="menu appchoice-loggedin">
          <li className="active">
            <a id="logo" href="/">
              <p>3D Gallery</p>
            </a>
          </li>
        </ul>

        {/* Search */}
        <div id="kuma_search">
          <input
            type="text"
            placeholder="Search for artist, exhibitors, exhibitions, ..."
            id="kuma_search_input"
            className="ui-autocomplete-input"
          />
        </div>

        {/* Language Switcher */}
        <ul className="language-switcher-locale-url">
          <li className="en first active">
            <a
              href="/en"
              className="language-link active"
              xmlLang="en"
              hrefLang="en"
            >
              English
            </a>
          </li>
          <li className="ar last">
            <a href="/ar" className="language-link" xmlLang="ar" hrefLang="ar">
              العربية
            </a>
          </li>
        </ul>

        {/* Login Menu */}
        <ul className="login-menu">
          <li>
            <a href="/dilmurod">Home</a>
          </li>
          <li>
            <a href="/dilmurod">Contact</a>
          </li>
        </ul>

        {/* Pricing Menu */}
        <ul className="pricing-menu">
          <li>
            <a href="/dilmurod">iT</a>
          </li>
          <li>
            <a href="/dilmurod">Park</a>
          </li>
        </ul>

        {/* Burger Menu */}
        <a href="#" className="burgermenu-reveal">
          <i>Menu</i>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <a href="#" style={{ display: 'none' }} className="burgermenu-hide">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
