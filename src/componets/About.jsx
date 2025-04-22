import React from 'react'

const About = () => {
    const details =[
        {
            id: 1,
            title:'99.99%',
            subtitle:'update'
        },
        {
            id: 2,
            title:'24/7',
            subtitle:'custome serviced'
        },
        {
            id: 3,
            title:'10gb',
            subtitle:'free storage'
        },
        {
            id: 4,
            title:'domain',
            subtitle:'free with sign up'
        },
    ]
  return (
    <div 
        name="about" 
        className='w-full h-fit md:h-screen bg-gray-900 text-white'
    >
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>
                    by{" "}
                    <span className='text-lighColor'>
                        Developers {" "}
                    </span>
                     for{" "}
                    <span className='text-lighColor'>
                        Developers
                    </span>
                </h2>
                <p className='text-xl font-light text-gray-500 py-8'>
                    Before nevermore in but door denser here now of madam lordly, bird thy maiden but said throws door i then.
                </p>
            </div>
            <div className='grid md:grid-cols-2 gap-10 px-2 w-full'>
                {details.map(({id,title,subtitle}) => (
                    <div key={id} className='flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300'>
                        <div className='flex flex-col items-center justify-center w-64 h-64 py-8 rounded-full shadow-lg shadow-lighColor'>
                            <p className='text-5xl font-bold text-lighColor'>
                                {title}
                            </p>
                            <p className='text-gray-400 mt-2 capitalize'>
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

export default About