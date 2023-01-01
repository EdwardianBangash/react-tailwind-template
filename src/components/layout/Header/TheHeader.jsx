import React from 'react'
import logo from '../../../logo.svg';
import './TheHeader.css'

const TheHeader = () => {
  return (
    <div className="header h-30 p-3 bg-white shadow-md">
        <nav className="flex text-stone-700">
            <a href="/" className="brand order-2 w-1/5 text-5xl px-20 text-yellow-400">
                <img src={logo} alt="" height="80px" width="80px"/>
            </a>
            <ul className="flex pl-24 text-xl order-1 w-2/5 items-center">
                <li className='mr-6'><a href="/">Home</a></li>
                <li className='mr-6'><a href="/games">Games</a></li>
                <li className='mr-6'><a href="/jobs">Jobs</a></li>
            </ul>
            <a href="/community" className="community text-xl pr-24 order-3 w-2/5 text-right items-center py-3">Community</a>
        </nav>
    </div>
  )
}

export default TheHeader