import { Pagina } from "../components/pagina";
import productImg from "/BobSimples.png"; 
import productImg2 from "/BobDupla.png"; 
import productImg3 from "/MagBee.png"; 

export function Acessorios() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full p-10 text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Nossos Acessórios</h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12 text-justify">
          Cada acessório da linha Magvia foi projetado para potencializar os resultados em neuromodulação. Combinando precisão, ergonomia e alta performance, eles complementam nossos equipamentos e oferecem versatilidade para diferentes protocolos clínicos e de pesquisa.
        </p>

        {/* Grid com altura igual para os cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-stretch">
          <CardProduto
            title="Bobina Circular"
            description="Ideal para aplicações que exigem ampla cobertura de estímulo magnético. Uma escolha versátil para protocolos clínicos e de pesquisa, unindo eficiência e confiabilidade."
            icon={<img src={productImg} alt="Bobina Circular" className="object-contain" />}
            color="bg-blue-500"
          />
          <CardProduto
            title="MagBee"
            description="A MagBee traz a potência da Estimulação Magnética Transcraniana em um formato compacto e funcional. Com design em formato de banco, alia performance de alto nível com praticidade no ambiente clínico."
            icon={<img src={productImg3} alt="MagBee" className="object-contain" />}
            color="bg-teal-500"
          />
          <CardProduto
            title="Bobina Figura 8"
            description="Projetada para máxima precisão, permite focar o estímulo em áreas específicas do cérebro. Ideal para protocolos que exigem controle cirúrgico e resultados altamente direcionados."
            icon={<img src={productImg2} alt="Bobina Figura 8" className="object-contain" />}
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
      <div className="flex items-center justify-center mb-6 w-full">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <p className="text-sm leading-relaxed text-justify">{description}</p>
    </div>
  );
}
