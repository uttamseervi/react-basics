import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";


// outlet kya karta hai:

function Layout() {
  return (
    <>
       {/* <Header />
      <outlet /> so here in this case the header and footer will be same for all the pages only the thing changes is the outleft
      agar me outlet ko footer ke neeche le aau to header of footer har page ke liye same rahenge bas outlet change hoga
      <Footer />  */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
