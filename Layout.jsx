import { Outlet } from "react-router";
import Header from "./nav/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
