import React, { useContext } from 'react';
import HeroSection from './Components/HeroSection';
import { useProductContext } from './Context/productcontex';



const About = () => {

const {myName}= useProductContext();


    const data={
        name:"Ankit Ecommerce",
    }
    return<>
    {myName}
     <HeroSection myData={data}/>
     </>

};






export default About;
