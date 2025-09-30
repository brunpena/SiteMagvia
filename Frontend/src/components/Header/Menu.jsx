import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { Glasses } from "lucide-react";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50 flex justify-between items-center">
      <NavLink to="/">
        <img src="/magviaLogo.png" alt="Mag Logo" className="w-20 ml-4 lg:w-24 md:ml-0" />
      </NavLink>

      <button
        className="md:hidden text-2xl mr-4 text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className="hidden md:flex">
        <div className="flex flex-row m-1 space-x-3 mr-4">
          <MenuItem to="/" icon={<FaHome />} label="Início" />
          <MenuItem to="/informacoes" icon={<MdMedicalServices />} label="Informações" />
          <MenuItem to="/produtos" icon={<CgShoppingCart />} label="Produtos" />
          <MenuItem to="/acessorios" icon={<Glasses />} label="Acessórios" />
          <MenuItem to="/sobrenos" icon={<FaInfoCircle />} label="Sobre Nós" />
          <MenuItem to="/contato" icon={<FaPhoneAlt />} label="Contato" />
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute top-16 mt-4 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-2 py-4">
          <MenuItem to="/" icon={<FaHome />} label="Início" onClick={() => setMenuOpen(false)} />
          <MenuItem to="/informacoes" icon={<MdMedicalServices />} label="Informações" onClick={() => setMenuOpen(false)} />
          <MenuItem to="/produtos" icon={<CgShoppingCart />} label="Produtos" onClick={() => setMenuOpen(false)} />
          <MenuItem to="/acessorios" icon={<Glasses />} label="Acessórios" onClick={() => setMenuOpen(false)} />
          <MenuItem to="/sobrenos" icon={<FaInfoCircle />} label="Sobre Nós" onClick={() => setMenuOpen(false)} />
          <MenuItem to="/contato" icon={<FaPhoneAlt />} label="Contato" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}

function MenuItem({ to, icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-purple-100 text-purple-700"
            : "hover:bg-gray-100 hover:text-purple-700"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
