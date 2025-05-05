import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Hero from '../Hero/Hero';
import NavHome from '../NavHome/NavHome';
import SpecailProducts from '../SpecailProducts/SpecailProducts';
import LatestArticals from '../LatestArticals/LatestArticals';
import WhyUs from '../WhyUs/WhyUs';
import BestDevelopers from '../BestDevelopers/BestDevelopers';
import CounterPage from '../CounterPage/CounterPage';
import CompanyServices from '../CompanyServices/CompanyServices';
import CallOurTeam from '../CallOurTeam/CallOurTeam';
import SpecailAreas from '../SpecailAreas/SpecailAreas';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <CounterPage />
      <CompanyServices />
      <NavHome />
      <SpecailAreas />
      <SpecailProducts />
      <LatestArticals />
      <WhyUs />
      <BestDevelopers />
      <CallOurTeam />
    </>
  );
}
