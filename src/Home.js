import React from "react";
import styled from "styled-components";
import HeroSection from "./Components/HeroSection";
import Trusted from "./Components/Trusted";

import Services from "./Components/Services";
import FeatureProduct from "./Components/FeatureProducts";

const Home=()=>{

  const data={
    name:"Ankit store",
  }
return <>
<HeroSection myData={data}/>
<FeatureProduct/>
<Services/>
<Trusted/>
</>
}




;
export default Home;