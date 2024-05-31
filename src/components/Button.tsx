import React from 'react'

interface ButtonProps {
    kind: "button";
    title: string;
    cnames: string;
}

const Button: React.FC<ButtonProps> = ({kind, title, cnames}) => {
  return (
    <button 
        type={kind || "submit"} 
        className={`px-4 py-3 font-bold text-center text-white transition-all border-none w-fit ${cnames} rounded-xl hover:-translate-y-1`}
    >
    {title}
    </button>
  )
}

export default Button