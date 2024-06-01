import React from "react";

interface ItemProps {
  title: string;
}

const ItemBox: React.FC<ItemProps> = ({ title }) => {
  return (
    <div
      className="flex items-center justify-center px-2 py-1 bg-white rounded-lg shadow-lg lg:px-4"
    >
      {title}
    </div>
  );
};

export default ItemBox;
