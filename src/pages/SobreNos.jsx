import React from "react";
import { FaLightbulb, FaEye, FaHeart } from "react-icons/fa";
import { TypingText } from "../components/TypingText";
import { Mapa } from "../components/mapa";
import { Brain } from "lucide-react";
import { Pagina } from "../components/pagina";

export function SobreNos() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full p-10 text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Sobre Nós</h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12 text-justify">
          A Magvia é uma startup incubada na Fundação Educere em Campo Mourão – PR, dedicada ao desenvolvimento de um Estimulador Magnético Transcraniano com tecnologia nacional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-stretch">
          <CardInfo
            title="Missão"
            description="Nossa missão é desenvolver soluções inovadoras em neuromodulação para melhorar a saúde mental e qualidade de vida das pessoas, oferecendo tecnologias avançadas e acessíveis que contribuem para o tratamento de transtornos neurológicos e psiquiátricos."
            icon={<FaLightbulb size={24} />}
            color="blue"
          />

          <CardInfo
            title="Visão"
            description="Ser reconhecida globalmente como líder em neuromodulação, proporcionando avanços revolucionários no tratamento de transtornos neurológicos e psiquiátricos, tornando as terapias inovadoras acessíveis a todas as pessoas, melhorando significativamente a saúde mental e o bem-estar da sociedade."
            icon={<FaEye size={24} />}
            color="teal"
          />

          <CardInfo
            title="Valores"
            description={
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-200 rounded-full inline-block mt-1"></span>
                  Qualidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-200 rounded-full inline-block mt-1"></span>
                  Excelência Científica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-200 rounded-full inline-block mt-1"></span>
                  Inovação
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-200 rounded-full inline-block mt-1"></span>
                  Responsabilidade Social
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-200 rounded-full inline-block mt-1"></span>
                  Empatia e Cuidado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-200 rounded-full inline-block mt-1"></span>
                  Acessibilidade
                </li>
              </ul>
            }
            icon={<FaHeart size={24} />}
            color="purple"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-16">Localização</h1>
        <div className="mt-4 w-full max-w-5xl">
          <Mapa />
        </div>
      </div>
    </Pagina>
  );
}

/* CardInfo: bg branco por padrão; muda visual no hover usando `group` */
function CardInfo({ title, description, icon, color = "blue" }) {
  // Mapeia classes específicas para cada cor — isso garante que o Tailwind/JIT gere todas as classes
  const styleMap = {
    blue: {
      ring: "group-hover:border-blue-500",
      iconBgHover: "group-hover:bg-blue-50",
      textHover: "group-hover:text-blue-500",
      iconColorHover: "group-hover:text-blue-500",
      borderHover: "group-hover:border-blue-500",
      focusRing: "focus:ring-blue-200",
    },
    teal: {
      ring: "group-hover:border-teal-500",
      iconBgHover: "group-hover:bg-teal-50",
      textHover: "group-hover:text-teal-500",
      iconColorHover: "group-hover:text-teal-500",
      borderHover: "group-hover:border-teal-500",
      focusRing: "focus:ring-teal-200",
    },
    purple: {
      ring: "group-hover:border-purple-700",
      iconBgHover: "group-hover:bg-purple-50",
      textHover: "group-hover:text-purple-700",
      iconColorHover: "group-hover:text-purple-700",
      borderHover: "group-hover:border-purple-700",
      focusRing: "focus:ring-purple-200",
    },
  };

  const styles = styleMap[color] || styleMap.blue;

  return (
    <article
      tabIndex={0}
      className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out flex flex-col items-start text-left h-full focus:outline-none ${styles.focusRing}`}
      aria-labelledby={`card-${title}`}
    >
      <div className={`flex items-center gap-4 mb-4`}>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/10 transition-colors duration-300 ${styles.iconBgHover} ${styles.borderHover}`}
          style={{ borderWidth: 0 }}
        >
          <span className={`text-gray-700 transition-colors duration-300 ${styles.iconColorHover}`}>
            {icon}
          </span>
        </div>

        <h2 id={`card-${title}`} className={`text-lg font-semibold transition-colors duration-300 ${styles.textHover}`}>
          <TypingText text={title} />
        </h2>
      </div>

      <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
        {description}
      </div>
    </article>
  );
}
