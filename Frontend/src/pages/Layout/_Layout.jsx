import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Header/Menu";
import { Footer } from "../../components/Footer/Footer";
import { ScrollToTop } from "../../components/Layout/ScrollToTop";

export function Layout() {
  return (
    <div
      className={`
        flex flex-col
        w-screen min-h-screen       
    `}
    >
      <ScrollToTop behavior="smooth" />
      <Menu/>
      <main className="flex flex-col flex-1 mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}