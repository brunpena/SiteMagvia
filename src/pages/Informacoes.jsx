import { Pagina } from "../components/pagina";
import { FaBriefcaseMedical, FaSadTear, FaBrain, FaHeartbeat, FaUserClock } from "react-icons/fa";
import { AreasAplicacionais } from "../components/AreasAplicacionais";
import { Beneficios } from "../components/Beneficios";
export function Informacoes() {
  return (
    <Pagina>
      <AreasAplicacionais />
      <Beneficios />
    </Pagina>
  );
}

function CardIcon({ bg, icon, title }) {
  return (
    <div className={`flex flex-col items-center justify-center w-72 h-48 rounded-xl shadow-md ${bg} transition-transform duration-300 hover:scale-105 hover:shadow-xl`}>
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-3">
        {icon}
      </div>
      <span className="text-white font-semibold text-lg">{title}</span>
    </div>
  );
}

function CardInfo({ bg, icon, title, description }) {
  return (
    <div className={`flex flex-col items-center text-center justify-center w-72 h-52 rounded-xl shadow-md p-4 ${bg} transition-transform duration-300 hover:scale-105 hover:shadow-xl`}>
      {icon}
      <h1 className="font-bold text-lg mt-2">{title}</h1>
      <p className="text-sm mt-2 text-gray-800 ">{description}</p>
    </div>
  );
}
