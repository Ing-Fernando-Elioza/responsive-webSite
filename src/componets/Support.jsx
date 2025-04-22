import React from 'react'
import GreenBtn from './GreenBtn'
import { 
    MdOutlineComputer,
    MdOutlineSupportAgent,
    MdPerson 
} from 'react-icons/md'

const Support = () => {
    const supportLinks = [
        {
            id: 1,
            title:'Technical',
            subtitle:'Raven pallid lost smiling beating yet distinctly muttered whom. And shall and oer tell i, from as to and the.',
            icon: <MdOutlineComputer size={25}/>
        },
        {
            id: 2,
            title:'General',
            subtitle:'Sitting in morrow longer divining distant made the from. Mystery of bird take bird dared and before shutter. Gloated followed.',
            icon: <MdOutlineSupportAgent size={25}/>
        },
        {
            id: 3,
            title:'Technical',
            subtitle:'I a ominous then grew of, faintly door entrance and lenore. For prophet on or my thrilled bird seraphim my.',
            icon: <MdPerson size={25}/>
        }
    ]
  return (
    <div name="support" className='w-full h-fit bg-slate-300'>
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <div className='px-4 py-12'>
                <h2 className='text-5xl font-bold text-center'>
                    Support
                </h2>
                <p className='text-xl py-8 text-gray-600 text-center'>
                    Lining much some memories bird what spoke devil, and burned merely all gave ember nepenthe as a prophet. Divining dreams.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-x-8 gap-y-16 px4 pt-12 sm:pt-20 text-black'>
                {supportLinks.map(({id,title,subtitle,icon}) => (
                    <div key={id} className='bg-gray-900 text-white rounded-xl shadow-lighColor'>
                        <div className='p-8'>
                            <div className='flex items-center justify-center w-16 h-16 p-4 bg-lighColor text-darkColor rounded-full mt-[-4rem]'>
                                {icon}
                            </div>
                            <h3 className='font-bold text-2xl my-6'>
                                {title}
                            </h3>
                            <p className='text-gray-300 text-base pb-12'>
                                {subtitle}
                            </p>
                        </div>
                    </div>
                ))}
                <div className='flex w-full items-center justify-center'>
                    <GreenBtn 
                        title='contat us'
                        className='capitalize py-3 px-6 w-1/2 my-12'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support