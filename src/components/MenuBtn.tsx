import React from "react";

const MenuBtn: React.FC = () => {
  return (
    <span className="group relative inline-block text-white rounded-lg lg:hidden focus:outline-none focus:ring">
      <span className="absolute inset-0 border rounded-lg border-forest-green-500 group-active:border-forest-green-900"></span>
      <span className="block border rounded-lg border-forest-green-500 bg-forest-green-500 px-6 py-3 transition-transform active:border-forest-green-500 active:bg-forest-green-900 group-hover:-translate-x-1 group-hover:-translate-y-1">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" fill="#fff"></path>
          </svg>
        </p>
      </span>
    </span>
  );
};

export default MenuBtn;
