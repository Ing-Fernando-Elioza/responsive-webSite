import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'

const Services = () => {
    const services = [
        {
            id: 1,
            title: "one",
            subtitle:"Que que piel recodos con pies sepultura quedo. Manecitas de."
        },
        {
            id: 2,
            title: "two",
            subtitle:"Noyé anglais mes j'ai carcasse je acteurs aux des flots."
        },
        {
            id: 3,
            title: "three",
            subtitle:"La la borrachos despenada se quemadas es, las por el."
        },
        {
            id: 4,
            title: "four",
            subtitle:"And grew visiter thing you with crest my within, as."
        }
    ];    
  return (
    <div 
        name="services" 
        className='w-full h-fit md:h-screen bg-slate-300'
    >
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <h2 className='text-5xl font-bold text-center'>
                Services
            </h2>
            <p className='text-xl py-8 text-gray-600 text-center'>
                None plain did parasites thy breast. Mirth but this from had disporting mine where. In taste finds light loathed, full.
            </p>
            <div className='grid sm:grid-cols-2 gap-4 pt-4'>
                {services.map(({id, title,subtitle}) => (
                    <div key={id} className='flex items-start p-4 bg-gray-900 text-white rounded-md'>
                        <div>
                            <FaChevronCircleRight 
                                size={20}
                                className='mt-3 mr-4 text-lighColor'
                            />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg text-lighColor pt-2 pb-4 capitalize'>
                                {title}
                            </h3>
                            <p className='text-lg'>
                                {subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services