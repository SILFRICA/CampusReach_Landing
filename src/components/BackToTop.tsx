import React, { useEffect, useState } from "react";
import Button from "./Button";

const BackToTop: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const [active, setActive] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
        handleScroll();
    }
  }, [active]);
  return (
    <div className={`${active ? "block" : "hidden"}`} onClick={handleBackToTop}>
      <Button
        kind="button"
        title="&uarr;"
        cnames="bg-forest-green-500 fixed bottom-10 right-10 z-10 animate-bounce text-lg lg:text-3xl rounded-full shadow-md"
      />
    </div>
  );
};

export default BackToTop;
