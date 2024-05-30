import React from 'react'

interface ButtonProps {
    kind: "button";
    title: string;
}

const Button: React.FC<ButtonProps> = ({kind, title}) => {
  return (
    <button 
        type={kind || "submit"} 
        className='px-4 py-3 font-bold text-center text-white transition-all border-none bg-forest-green-500 rounded-xl hover:-translate-y-1'
    >
    {title}
    </button>
  )
}

export default Button