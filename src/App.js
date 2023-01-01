import React from 'react'
import Banner from "./components/layout/Banner/Banner";
import TheHeader from "./components/layout/Header/TheHeader";
import TheSection from "./components/Main/Section/TheSection";
import VideoSection from "./components/Main/VideoSection/TheSection";
import FeaturedSection from "./components/Main/Games/TheSection";
import './App.css';
import './index.css';

function App() {
  return <>
      <div className="header-wrapper">
        <TheHeader></TheHeader>
        <Banner></Banner>
      </div>
      <TheSection></TheSection>
      <VideoSection></VideoSection>
      <FeaturedSection></FeaturedSection>
    </>;
}

export default App;
