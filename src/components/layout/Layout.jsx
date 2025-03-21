import { Outlet } from "react-router";
import AppBar from "../appBar/AppBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <main className="font-display m-10 grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
