import React from "react";
import Navbar2 from "./components/Navbar";
import QuickLinks from "./components/QuickLinks";
import Footer from "./components/Footer";
import CustomerReview from "./components/CustomerReview";
import FAQs from "./components/FAQs";
import ChooseServise from "./components/ChooseServise";
import HowItWorks from "./components/HowItWorks";
import Top10 from "./components/Top10.jsx";
import Carosel from "./components/Carosel";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Summary from "./components/Summary";




function App() {
  return <>
  <Navbar2 />
  <BreadCrumbs />
  <Header />
  {/* <FormI /> */}
  <Summary />
  <Carosel />
  <Top10 />
  <FAQs />
  <ChooseServise />
  <HowItWorks />
  <CustomerReview />
  <QuickLinks />
  <Footer />
  </>;
}

export default App;
