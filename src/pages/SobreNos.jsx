import { Pagina } from "../components/pagina";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function SobreNos() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full p-10 text-gray-900">

        {/* Título */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Sobre Nós</h1>

        {/* Descrição */}
        <p className="text-lg text-center max-w-3xl mb-12 leading-relaxed">
          A Magvia é uma startup pré-incubada na Fundação Educere em Campo Mourão – PR, dedicada ao desenvolvimento de um Estimulador Magnético Transcraniano com tecnologia nacional.
        </p>

        {/* Cards de Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-5xl">
          <CardInfo title="Missão" description="Fornecer soluções inovadoras em neuromodulação para melhorar a saúde e qualidade de vida." color="purple" />
          <CardInfo title="Visão" description="Ser referência em tecnologia de neuromodulação no Brasil e no mundo." color="blue" />
          <CardInfo title="Valores" description="Ética, inovação, compromisso com a ciência e respeito aos pacientes." color="teal" />
        </div>

        {/* Contato */}


      </div>
    </Pagina>
  );
}

// Componentes auxiliares
function CardInfo({ title, description, color }) {
  const bgColors = {
    purple: "bg-purple-100 text-purple-800",
    blue: "bg-blue-100 text-blue-800",
    teal: "bg-teal-100 text-teal-800"
  };

  return (
    <div className={`flex flex-col items-center text-center rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 ${bgColors[color]}`}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}

