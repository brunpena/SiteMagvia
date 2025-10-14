import { Pagina } from "../../../components/Layout/Pagina";
import productImg from "/maxClinic.png";
import acessorio1 from "/BobSimples.png";
import acessorio2 from "/BobDupla.png";
import acessorio3 from "/magBee.png";

export function SobreMaximusClinic() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] bg-gray-50 py-16 px-6">
        <div className="max-w-5xl bg-white shadow-lg rounded-2xl p-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700">
                Sobre a Maximus Clinic
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                A <strong>Maximus Clinic</strong> é muito mais do que um equipamento médico: 
                é a ferramenta definitiva para clínicas e profissionais que buscam 
                <strong> precisão, segurança e resultados de alto impacto</strong> em neuromodulação.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                Desenvolvida com tecnologia nacional e internacional, a Maximus foi projetada para 
                atender <strong>diversas áreas da saúde</strong>, como neurologia, psiquiatria, fisioterapia 
                e reabilitação. Seu design compacto, aliado à alta performance, garante aplicações seguras, 
                eficientes e consistentes para pacientes e especialistas.
              </p>

              <div className="flex flex-col text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                <h2 className="font-bold text-purple-700 text-2xl">Acessórios compatíveis:</h2>
                <div className="mt-2 flex flex-row">
                  <img src={acessorio1} alt="Bobina Simples" className="w-1/4 m-2 rounded-2xl shadow-md object-contain hover:scale-105 transition-transform duration-300" />
                  <img src={acessorio2} alt="Bobina Dupla" className="w-1/4 m-2 rounded-2xl shadow-md object-contain hover:scale-105 transition-transform duration-300" />
                  <img src={acessorio3} alt="MagBee" className="w-1/4 m-2 rounded-2xl shadow-md object-contain hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={productImg}
                alt="Maximus - Estimulador Magnético Transcraniano"
                className="w-full max-w-md rounded-2xl shadow-md object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-purple-700">Diferenciais da Maximus Clinic</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Alta Performance Clínica:</strong> projetada para longos períodos de uso sem perda de intensidade.</li>
              <li><strong>Precisão Terapêutica:</strong> ajustes finos em frequência e intensidade, estimulando áreas específicas do cérebro com eficácia.</li>
              <li><strong>Protocolos Flexíveis:</strong> compatível com múltiplos protocolos médicos, atendendo neurologia, psiquiatria, reabilitação e mais.</li>
              <li><strong>Design Inteligente e Ergonômico:</strong> compacta, moderna e pensada para o conforto do paciente e praticidade do profissional.</li>
              <li><strong>Durabilidade Garantida:</strong> materiais de alta resistência que reduzem custos de manutenção.</li>
              <li><strong>Suporte Especializado:</strong> acompanhamento com treinamento técnico e científico, online e presencial.</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">
              Quer levar a sua clínica para o próximo nível?
            </p>
            <a
              href="/contato"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              Falar com a gente
            </a>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
