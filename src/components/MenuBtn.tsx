import React from "react";

const MenuBtn: React.FC = () => {
  return (
    <span className="flex flex-col gap-1 p-4 text-white rounded-lg lg:hidden bg-forest-green-500">
      <span className="w-5 h-1 bg-white" />
      <span className="w-5 h-1 bg-white" />
      <span className="w-5 h-1 bg-white" />
    </span>
  );
};

export default MenuBtn;
