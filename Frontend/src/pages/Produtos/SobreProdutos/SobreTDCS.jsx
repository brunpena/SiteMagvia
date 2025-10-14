import { Pagina } from "../../../components/Layout/Pagina";
import productImg from "/TDCS.png";

export function SobreTDCS() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] bg-gray-50 py-16 px-6">
        <div className="max-w-5xl bg-white shadow-lg rounded-2xl p-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#3B82F6]">
                Sobre o TDCS
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                O <strong>TDCS</strong> (Transcranial Direct Current Stimulation) é um 
                <strong> Estimulador Transcraniano por Corrente Contínua</strong>, um equipamento moderno 
                desenvolvido para auxiliar em diversas áreas da saúde e do bem-estar.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                Compacto, seguro e de alta performance, o TDCS foi projetado para oferecer 
                aplicações eficazes em protocolos clínicos de neurologia, psiquiatria, reabilitação 
                cognitiva e melhora de desempenho. Seu uso promove estimulação suave e controlada, 
                favorecendo avanços terapêuticos com praticidade e confiabilidade.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={productImg}
                alt="TDCS - Estimulador Transcraniano por Corrente Contínua"
                className="w-full max-w-md rounded-2xl shadow-md object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#3B82F6] rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-[#3B82F6]">Diferenciais do TDCS</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Estimulação Segura e Não Invasiva:</strong> promove efeitos terapêuticos sem necessidade de procedimentos complexos.</li>
              <li><strong>Alta Precisão:</strong> permite direcionar a estimulação para áreas específicas do cérebro, otimizando os resultados.</li>
              <li><strong>Aplicações Clínicas Amplas:</strong> indicado para protocolos em neurologia, psiquiatria, reabilitação e bem-estar.</li>
              <li><strong>Design Compacto e Prático:</strong> fácil de manusear, transportar e integrar ao dia a dia clínico.</li>
              <li><strong>Suporte Técnico e Treinamento:</strong> acompanhamento especializado para garantir que o profissional utilize todo o potencial do equipamento.</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">
              Descubra como o TDCS pode transformar seus atendimentos:
            </p>
            <a
              href="/contato"
              className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              Falar com a gente
            </a>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
