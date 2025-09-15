import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";
import Footer from "../components/Footer";

export function Layout() {
  return (
    <div
      className={`
        flex 
        w-screen min-h-screen       
    `}
    >
      <Menu/>
      <main className="flex flex-col flex-1">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}