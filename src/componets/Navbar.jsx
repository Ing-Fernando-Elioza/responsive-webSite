import React, { useState } from 'react'
import { FaBars, 
        FaTimes,
        FaFacebook,
        FaInstagram,
        FaGithub,
        FaLinkedin
    } from 'react-icons/fa'
import GreenBtn from './GreenBtn'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [navigation,setNavigation] = useState(false);
    const links = [
        {
            id:1,
            link: "home"
        },
        {
            id:2,
            link: "services"
        },
        {
            id:3,
            link: "about"
        },
        {
            id:4,
            link: "support"
        },
        {
            id: 5,
            link: "pricing"
        }
    ]

  return (
    <div className='w-screen h-20 z-20 fixed bg-gray-900 text-white'>
        <div className='px-3 flex items-center justify-between w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-4xl font-bold'>webSolutions</h1>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({id,link}) => (
                        <li key={id} className='capitalize p-4 cursor-pointer hover:text-lighColor duration-200'>
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    )) 
                }
            </ul>
            <div className='hidden md:flex mr-4'>
                <GreenBtn title="sign in" className="px-9 py-3" />
            </div>
            {/*burger icon */}
            <div className='md:hidden'>
                <div onClick={() => setNavigation(true)} className='cursor-pointer'>
                    <FaBars size={30}/>
                </div>
            </div>
        </div>
        {/* mobile menu */}
        <div className={navigation ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur' :  ""}>
            <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <h2 onClick={() => setNavigation(false)} className='text-3xl font-bold capitalize cursor-pointer'>
                            webSolutions
                        </h2>
                        <div onClick={() => setNavigation(false)} className='p-3 cursor-pointer'>
                            <FaTimes size={30}/>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex flex-col h-fit gap-12'>
                    <GreenBtn className="px-9 py-3 capitalize" title="sign in"/>
                    <ul className='capitalize'>
                    {
                        links.map(({id,link}) => (
                            <li key={id} className='p-4 text-2xl tracking-wider cursor-pointer hover:text-lighColor duration-200'>
                                <Link 
                                    onClick={() => setNavigation(false)} 
                                    to={link} 
                                    smooth duration={500}
                                    offset={-75}
                                >
                                    {link}
                                </Link>
                            </li>
                        )) 
                    }
                    </ul>
                    <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer'>
                            <a href='https://www.facebook.com/luisfernando.eliozaponce'>
                                <FaFacebook size={25} />
                            </a>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer'>
                            <a href="https://www.instagram.com/fer.elioza/">
                                <FaInstagram size={25}/>
                            </a>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer'>
                            <a href="https://github.com/Ing-Fernando-Elioza">
                                <FaGithub size={25}/>
                            </a>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lighColor p-3 cursor-pointer'>
                            <FaLinkedin size={25}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>        
  )
}

export default Navbar