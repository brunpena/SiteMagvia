import React, { useState } from "react";
import { Pagina } from "../../components/Layout/Pagina";
import productImg from "/max.png"; 
import productImg2 from "/maxClinic.png"; 
import productImg3 from "/TDCS.png"; 
import productImg4 from "/magBee.png";
import { Star } from "lucide-react";
import { TypingText } from "../../components/Typing/TypingText";
import { NavLink } from "react-router-dom";

export function Produtos() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full p-10 text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Nossos Produtos</h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12 text-justify">
          Desenvolvemos soluções tecnológicas em neuromodulação e equipamentos médicos, sempre com foco em inovação e qualidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-stretch">
          <CardProduto
            title="Maximus Pro"
            description="Estimulador Magnético Transcraniano de alta performance para diversas áreas médicas."
            icon={<img src={productImg} alt="Maximus Pro" className="object-contain " />}
            colorHex="#14B8A6"
            className="bg-teal-50 border-teal-200 border-2"
            highlight={true}
            link="/sobreprodutos/maximus"
          />
  
          <CardProduto
            title="Maximus Clinic"
            description="Tecnologia de ponta em neuromodulação, com alta performance e precisão. Desenvolvido para atender diversas áreas médicas, garante eficácia, segurança e inovação em cada aplicação."
            icon={<img src={productImg2} alt="Maximus Clinic" className="object-contain " />}
            colorHex="#7E22CE"
            link="/sobreprodutos/maximus-clinic"
          />
          
          <CardProduto
            title="MagBee"
            description="A MagBee traz a potência da Estimulação Magnética Transcraniana em um formato compacto e funcional. Com design em formato de banco, alia performance de alto nível com praticidade no ambiente clínico."
            icon={<img src={productImg4} alt="MagBee" className="object-contain" />}
            colorHex="#14B8A6"
            link="/sobreprodutos/sobre-acessorios/magbee"
          />
          

          <CardProduto
            title="TDCS"
            description="Estimulador Transcraniano por Corrente Contínua, um equipamento moderno desenvolvido para auxiliar em diversas áreas da saúde e do bem-estar."
            icon={<img src={productImg3} alt="TDCS" className="object-contain " />}
            colorHex="#3B82F6"
            link="/sobreprodutos/tdcs"
          />

          
        </div>
      </div>
    </Pagina>
  );
}

function CardProduto({ title, description, icon, colorHex, className = "", highlight = false, link = "#" }) {
  const [hovered, setHovered] = useState(false);

  function hexToRgba(hex, alpha = 0.18) {
    const h = hex.replace("#", "");
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const neutralBase = "0 6px 18px rgba(15, 23, 42, 0.1)";
  const subtleColored = `0 8px 20px ${hexToRgba(colorHex, 0.1)}`;
  const hoverColored = `0 20px 40px ${hexToRgba(colorHex, 0.175)}, 0 6px 18px rgba(15,23,42,0.05)`;

  const boxShadow = hovered ? hoverColored : `${neutralBase}, ${subtleColored}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col justify-between items-center rounded-2xl p-8 
                 transition-transform duration-300 ease-out transform hover:-translate-y-1 h-full text-center ${className}`}
      style={{ boxShadow }}
    >
      <div className="flex h-88 items-center justify-center w-full mb-6">
        {icon}
      </div>

      <div className="flex flex-col justify-between flex-1">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center justify-center gap-2">
          <TypingText text={title} />
          {highlight && <Star className="w-5 h-5 text-yellow-500 fill-yellow-400" />}
        </h2>

        <p className="text-[14px] leading-relaxed h-56 text-gray-600 text-justify mb-6 lg:h-30 text-sm">
          {description}
        </p>

        <NavLink to={link} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-50 hover:border border-blue-500 hover:text-blue-500 transition cursor-pointer">
          Saiba mais
        </NavLink>
      </div>
    </div>
  );
}

