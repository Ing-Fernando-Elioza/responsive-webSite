import React from 'react'
import GreenBtn from './GreenBtn'
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaGithub
 } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 text-gray-400 py-8 px-2 border-t-2'>
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <div className='flex flex-col gap-8 md:flex-row items-center justify-center w-full'>
                <div className='w-3/4 md:w-1/2'>
                    <div className='grid grid-cols-2 mx-auto w-4/5 gap-10 '>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <a href='https://www.facebook.com/luisfernando.eliozaponce'>
                                <FaFacebook size={25} />
                            </a>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <a href="https://www.instagram.com/fer.elioza/">
                                <FaInstagram size={25}/>
                            </a>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <FaLinkedin size={25}/>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <a href="https://github.com/Ing-Fernando-Elioza">
                                <FaGithub size={25}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 md:w-1/2'>
                    <div className='w-full pt-8 md:pt-2'>
                        <p className='font-bold uppercase mb-8 text-lighColor text-lg text-center md:text-left'>
                            Suscribe to our newsletter
                        </p>
                        <form 
                            action="https://getform.io/f/157c4214-51a6-44c8-bcf4-6fe1b6f82a55" 
                            method='POST'
                            className='flex flex-col sm:flex-row'
                        >
                            <input 
                                type="text" 
                                name='email' 
                                className='w-full p-2 mr-4 rounded-md mb-4 text-gray-900'
                                placeholder='Daily newsletter'
                            />
                            <GreenBtn title="suscribe" className="p-2 mb-4 "/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer