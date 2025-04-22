import React from 'react'

const GreenBtn = ({title,onClick,className}) => {
  return (
    <button 
        className={'borde bg-lighColor text-darkColor border-lighColor hover:bg-transparent hover:text-lighColor rounded-md duration-300 ease-out'+" "+className}
        onClick={onClick}
    >
        {title}
    </button>
  )
}

export default GreenBtn