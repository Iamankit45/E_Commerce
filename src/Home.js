import React from "react";
import styled from "styled-components";
import HeroSection from "./Components/HeroSection";
import Trusted from "./Components/Trusted";

import Services from "./Components/Services";

const Home=()=>{

  const data={
    name:"Ankit store",
  }
return <>
<HeroSection myData={data}/>

<Services/>
<Trusted/>
</>
}




;
export default Home;