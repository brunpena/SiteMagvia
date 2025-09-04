import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

export function Menu() {
  return (
    <nav className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50">
      <div className="flex justify-center md:justify-evenly items-center gap-4 md:gap-6 text-gray-900 text-lg font-sans font-semibold">

        <MenuItem to="/" icon={<FaHome />} label="Início" />
        <MenuItem to="/informacoes" icon={<MdMedicalServices />} label="Informações" />
        <MenuItem to="/sobrenos" icon={<FaInfoCircle />} label="Sobre Nós" />
        <MenuItem to="/contato" icon={<FaPhoneAlt />} label="Contato" />

      </div>
    </nav>
  );
}

// Componente auxiliar para itens do menu
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
