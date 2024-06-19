import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/HeaderLayout";

const Root = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
    </>
  );
};

export default Root;
