import React from 'react'
import './TheSection.css';
import CandyImage from '../../../../src/candy-crush.jpeg';
import Bubble from '../../../../src/bubble.jpeg';

const TheSection = () => {
  return (
    <div className="features-games h-auto my-5 flex">
        <div className="features-games-left w-1/4">
        <div className="features-games-image w-12/12 h-7/8"></div>
        </div>
        <div className="features-games-right w-3/4">
        <p class="text-deepOrange text-3xl font-light">Featured Games</p>
            <div className="flex">
            <div className="features-games-card mt-3 w-80 rounded-md shadow-md hover:rounded-lg hover:shadow-xl bg-neutral-100 mr-5">
                <img src={CandyImage} alt=""/>
                <p className="features-games-title text-lightPurple p-3 text-2xl">Candy Crush Soda Saga</p>
                <p className="features-games-desc text-slate-500 p-3 font-light text-md">
                    Switch and match your way through this sodalicious adventure to help Kimmy find her sister Tiffi.
                </p>
            </div>

            <div className="features-games-card mt-3 w-80 rounded-md shadow-md hover:rounded-lg hover:shadow-xl bg-neutral-100">
                <img src={Bubble} alt=""/>
                <p className="features-games-title text-lightPurple p-3 text-2xl">
                Bubble Witch 3 Saga
                </p>
                <p className="features-games-desc text-slate-500 p-3 font-light text-md">
                    Ready your wand and help Stella defeat her foes in this bubble-bursting escapade!
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TheSection