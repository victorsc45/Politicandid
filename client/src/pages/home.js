import React from 'react';
import Slider from '../components/Slider'
import ValuesGrid from '../components/ValuesGrid'




const Home = (props) => {
  return <div>
    <Slider />
    <ValuesGrid />
  </div>;
};

Home.propTypes = {};

export default Home;