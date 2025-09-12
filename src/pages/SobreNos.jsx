import { Pagina } from "../components/pagina";
import { FaLightbulb, FaEye, FaHeart } from "react-icons/fa";
import { TypingText } from "../components/TypingText";

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
            icon={<FaLightbulb size={40} />}
            color="bg-blue-500"
          />
          <CardInfo
            title="Visão"
            description="Ser reconhecida globalmente como líder em neuromodulação, proporcionando avanços revolucionários no tratamento de transtornos neurológicos e psiquiátricos, tornando as terapias inovadoras acessíveis a todas as pessoas, melhorando significativamente a saúde mental e o bem-estar da sociedade."
            icon={<FaEye size={40} />}
            color="bg-teal-500"
          />
          <CardInfo
            title="Valores"
            description={
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full inline-block mt-1"></span>
                  Qualidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full inline-block mt-1"></span>
                  Excelência Científica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full inline-block mt-1"></span>
                  Inovação
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full inline-block mt-1"></span>
                  Responsabilidade Social
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full inline-block mt-1"></span>
                  Empatia e Cuidado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full inline-block mt-1"></span>
                  Acessibilidade
                </li>
              </ul>
            }
            icon={<FaHeart size={40} />}
            color="bg-purple-700"
          />

        </div>
      </div>
    </Pagina>
  );
}

function CardInfo({ title, description, icon, color }) {
  return (
    <div
      className={`${color} flex flex-col items-center justify-start text-center rounded-2xl p-8 shadow-md text-white transition-transform duration-300 hover:scale-105 h-full`}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h2 className="text-xl font-semibold mb-4"><TypingText text={title} /></h2>
      <p className="text-sm leading-relaxed text-justify">{description}</p>
    </div>
  );
}
// "Qualidade, excelência científica, inovação, responsabilidade social, empatia, cuidado e acessibilidade."