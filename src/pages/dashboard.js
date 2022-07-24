import React from 'react';
// import { DashboardLayout } from '../components';
import WelcomeCarousel from '../pagesComponents/Dashboard/WelcomeCarousel';
import Chartt from '../pagesComponents/Dashboard/Charts/Chart';
import Coins from '../pagesComponents/Dashboard/Coins';
import { Wrapper, CoinsStyle } from '../styles/dashboard';
import Statistics from '../pagesComponents/Dashboard/StatisticNumbers';

export default function Dashboard() {
  return (
    <>
      <WelcomeCarousel />
      <Statistics />
      <Wrapper>
        <Chartt type="doughnut" />
        <Chartt type="bar" />
      </Wrapper>
      <CoinsStyle>
        <Coins type="Earned coins" coins="10 000 coins" price="£100.00" />
        <Coins type="Redeemed coins" coins="5 000 coins" price="£50.00" />
      </CoinsStyle>
      <Chartt type="bar-health" />
    </>
  );
}