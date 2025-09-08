import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";

export function Menu() {
  return (
    <div className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50 flex justify-between items-center">
      <img src="/magviaLogo.png" alt="Mag Logo" className="w-15"/>
      <nav className="">
        <div className="flex flex-row m-1 space-x-3">

          <MenuItem to="/" icon={<FaHome />} label="Início" />
          <MenuItem to="/informacoes" icon={<MdMedicalServices />} label="Informações" />
          <MenuItem to="/produtos" icon={<CgShoppingCart />} label="Produtos" />
          <MenuItem to="/sobrenos" icon={<FaInfoCircle />} label="Sobre Nós" />
          <MenuItem to="/contato" icon={<FaPhoneAlt />} label="Contato" />

        </div>
      </nav>
    </div>
  );
}

function MenuItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive ? "bg-purple-100 text-purple-700" : "hover:bg-gray-100 hover:text-purple-700"
        }`
      }
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </NavLink>
  );
}
