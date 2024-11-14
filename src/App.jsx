import React from "react";
import Navbar from "./components/navbar/navbar";
import Page1 from "./components/LandingPage/Page1";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </>
  );
};

export default App;
