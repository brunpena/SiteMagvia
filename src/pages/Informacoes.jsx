import { Pagina } from "../components/pagina";
import { FaBriefcaseMedical, FaSadTear, FaBrain, FaHeartbeat, FaUserClock } from "react-icons/fa";

export function Informacoes() {
  return (
    <Pagina>
      <div className="flex flex-col items-center w-full gap-12 p-6">

        {/* Linha de especialidades */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <CardIcon bg="bg-purple-600" icon={<FaBriefcaseMedical />} title="PSIQUIATRIA" />
          <CardIcon bg="bg-blue-600" icon={<FaBrain />} title="NEUROLOGIA" />
          <CardIcon bg="bg-teal-500" icon={<FaHeartbeat />} title="FISIOTERAPIA" />
        </div>

        {/* Linha de condições */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <CardInfo bg="bg-purple-100" icon={<FaSadTear className="text-purple-600" />} title="Depressão" description="Reduz custos com antidepressivos e auxilia na remissão de 69% dos pacientes." />
          <CardInfo bg="bg-blue-100" icon={<FaBrain className="text-blue-600" />} title="AVC" description="Reabilitação pós-AVC com nível A de evidência." />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <CardInfo bg="bg-teal-100" icon={<FaHeartbeat className="text-teal-600" />} title="Dor Crônica" description="Melhora a dor de pacientes com dor crônica em até 50%." />
          <CardInfo bg="bg-blue-100" icon={<FaUserClock className="text-blue-600" />} title="Alzheimer" description="Retarda o declínio das funções cognitivas." />
        </div>

      </div>
    </Pagina>
  );
}

// Componentes auxiliares
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
      <p className="text-sm mt-2 text-gray-800">{description}</p>
    </div>
  );
}
