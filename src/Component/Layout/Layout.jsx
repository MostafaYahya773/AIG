import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
export default function Layout() {
  return (
    <>
      <Nav />
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
