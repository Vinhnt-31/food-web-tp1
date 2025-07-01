import "./Home.css";
import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import AppDownload from "../../Components/AppDownload/AppDownload";
import DisplayFood from "../../Components/DisplayFood/DisplayFood";
import ServiceMenu from "../../Components/ServiceMenu/ServiceMenu";
import Contact from "../../Components/Contact/Contact";
const Home = () => {
  const [category, setCategory] = useState(0);
  return (
    <div>
      <Header />
      <ServiceMenu category={category} setCategory={setCategory} />
      <DisplayFood category={category} />
      <AppDownload />
      <Contact />
    </div>
  );
};

export default Home;
