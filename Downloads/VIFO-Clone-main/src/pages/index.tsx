import React from 'react';
import {
  Page,
  Navbar,
  NavTitleLarge,
  Card
} from 'zmp-framework/react';
import SwiperHomePage from '../components/swiper-home-page';

const HomePage = () => {

  return (
    <Page name="home" navbarLarge>
      {/* Top Navbar */}
      <SwiperHomePage/>

    </Page>
  );
}

export default HomePage;