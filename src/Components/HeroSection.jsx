import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Virtual Build Tools
            <span className='bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text'>
            {" "}
            For Developers
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Build your dream project with our tools and resources to create stunning virtual reality experiences.  Get started today!<a href="https://www.google.com" className="text-violet-500">Learn More</a> or visit <a href="http://www.google.com" className="text-violet-500">our blog</a> for more information.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-violet-500 hover:bg-violet-600 text-white py-3 px-4 rounded-md' >
                Get Started
            </a>
            <a href="#" className="py-3 px-4 border rounded-md ml-4">
            Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video 
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4" >
            <source src={video1} type="video/mp4" />
            Your Browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-violet-700 shadow-violet-400 mx-2 my-4" >
            <source src={video2} type="video/mp4" />
            Your Browser does not support the video tag.
            </video>
        </div>
    </div>
  );
};

export default HeroSection