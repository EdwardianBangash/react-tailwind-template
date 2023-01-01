import React from 'react';
import './TheSection.css';

const TheSection = () => {
  return (
    <div className="banner-section flex flex-row h-auto pt-5 mt-5">
        <div className="banner-section-left w-2/4 relative h-auto">
            <div className="banner-section-left-image"></div>
            <button className="play-now-btn absolute top-56 right-6">Play now</button>
        </div>
        <div className="banner-section-right w-2/4 mb-7">
            <div className="banner-section-right-image m-auto"></div>
            <h6 className="text-deepOrange text-2xl text-center mt-0">Play our fun and popular games!</h6>
            <p className="text-center mx-6 mt-5 font-extralight">
              In the Kingdom you’ll find the best games to play in your browser, as well as our game apps. Play on your computer, mobile or tablet and simply sync your progress. King games are easy to pick up, but hard to put down! So get ready to have fun and enter the Kingdom!
            </p>
            <div className="btn-wrapper text-center mt-5">
            <button className="play-now-btn">All games</button>
            </div>
        </div>
    </div>
  )
}

export default TheSection