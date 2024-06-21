import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/HeaderLayout";
import BackToTop from "../components/BackToTop";

const Root = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <BackToTop />
    </>
  );
};

export default Root;
