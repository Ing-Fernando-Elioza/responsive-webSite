import React from 'react'
import GreenBtn from './GreenBtn'
import image1 from '../assets/image-1.png'

const Hero = () => {
  return (
    <div 
        name='home' 
        className='flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left'
    >
        <div className='grid md:grid-cols-2 max-w-screen-xl m-auto px-3'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl text-gray-500'>
                    Best develompent on planet earth
                </p>
                <h1 className='pt-1 pb-6 text-5xl md:text-7xl font-bold'>
                    <span className='text-lighColor'>webSolutions</span> online services
                </h1>
                <p className='text-base font-light text-gray-500'>
                    Into said door i repeating for never ever ease. For have he saintly this clasp this volume till doubting. Thy.
                </p>
                <GreenBtn title="sign in" className="capitalize py-3 px-6 sm:w-8/12 my-8" />
            </div>
            <div className='flex items-center justify-center'>
                <img src={image1} alt="heroImage" className='w-3/4 rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero