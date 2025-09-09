import { Pagina } from "../components/pagina";
import productImg from "/max.png"; 
import productImg2 from "/maxClinic.png"; 
import productImg3 from "/TDCS.png"; 

export function Produtos() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full p-10 text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Nossos Produtos</h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12 text-justify">
          Desenvolvemos soluções tecnológicas em neuromodulação e equipamentos médicos, sempre com foco em inovação e qualidade.
        </p>

        {/* Grid com altura igual para os cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-stretch">
          <CardProduto
            title="Maximus Versão Pro"
            description="Estimulador Magnético Transcraniano de alta performance para diversas áreas médicas."
            icon={<img src={productImg} alt="Maximus Versão Pro" className="object-contain" />}
            color="bg-blue-500"
          />
          <CardProduto
            title="TDCS"
            description="Estimulador Transcraniano por Corrente Contínua, um equipamento moderno desenvolvido para auxiliar em diversas áreas da saúde e do bem-estar."
            icon={<img src={productImg3} alt="TDCS" className="object-contain" />}
            color="bg-teal-500"
          />
          <CardProduto
            title="Maximus Clinic"
            description="Tecnologia de ponta em neuromodulação, com alta performance e precisão. Desenvolvido para atender diversas áreas médicas, garante eficácia, segurança e inovação em cada aplicação."
            icon={<img src={productImg2} alt="Maximus Clinic" className="object-contain" />}
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
      className={`${color} flex flex-col items-center rounded-2xl p-8 shadow-md text-white transition-transform duration-300 hover:scale-105 h-full`}
    >
      {/* Imagem sem altura fixa */}
      <div className="flex items-center justify-center mb-6 w-full">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <p className="text-sm leading-relaxed text-justify">{description}</p>
    </div>
  );
}
