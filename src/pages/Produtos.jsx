import { Pagina } from "../components/pagina";
import { FaBrain, FaCogs, FaLaptopMedical } from "react-icons/fa";
import productImg from "/max.png"; 
import productImg2 from "/maxClinic.png"; 
import productImg3 from "/TDCS.png"; 


export function Produtos() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full p-10 text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Nossos Produtos</h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12">
          Desenvolvemos soluções tecnológicas em neuromodulação e equipamentos médicos, sempre com foco em inovação e qualidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <CardProduto
            title="Maximus Versão Pro"
            description="Estimulador Magnético Transcraniano de alta performance para diversas áreas médicas."
            icon={<img src={productImg} alt="Maximus Versão Pro" />}
            color="bg-blue-500"
          />
          <CardProduto
            title="TDCS"
            description="Estimulador Transcraniano por Corrente Contínua, um equipamento moderno desenvolvido para auxiliar em diversas áreas da saúde e do bem-estar."
            icon={<img src={productImg3} alt="TDCS" />}
            color="bg-teal-500"
          />
          <CardProduto
            title="Maximus Clinic"
            description="Tecnologia de ponta em neuromodulação, com alta performance e precisão. Desenvolvido para atender diversas áreas médicas, garante eficácia, segurança e inovação em cada aplicação."
            icon={<img src={productImg2} alt="Maximus Clinic" />}
            color="bg-purple-700"
          />
        </div>
      </div>
    </Pagina>
  );
}

function CardProduto({ title, description, icon, color }) {
  return (
    <div
      className={`${color} flex flex-col items-center justify-center rounded-2xl p-8 shadow-md text-white transition-transform duration-300 hover:scale-105`}
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}
