import { Pagina } from "../components/pagina";
import { FaLightbulb, FaEye, FaHeart } from "react-icons/fa";

export function SobreNos() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full p-10 text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Sobre Nós</h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12">
          A Magvia é uma startup pré-incubada na Fundação Educere em Campo Mourão – PR, dedicada ao desenvolvimento de um Estimulador Magnético Transcraniano com tecnologia nacional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
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
            description="Qualidade, excelência científica, inovação, responsabilidade social, empatia, cuidado e acessibilidade."
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
      className={`${color} flex flex-col items-center justify-center rounded-2xl p-8 shadow-md text-white transition-transform duration-300 hover:scale-105`}
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}
