import { Pagina } from "../../components/pagina";
import productImg from "/max.png"; 
import acessorio1 from "/BobSimples.png"
import acessorio2 from "/BobDupla.png"
import acessorio3 from "/magBee.png"
import caraFeliz from "/caraFeliz.png"
import mulherAssustada from "/mulherAssustada.png"

export function SobreMaximus() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] bg-gray-50 py-16 px-6">
        <div className="max-w-5xl bg-white shadow-lg rounded-2xl p-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14B8A6]">
                Sobre a Maximus
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                A Maximus é o principal produto da empresa brasileira Magvia Produtos Médicos Ltda,
                dedicada ao desenvolvimento de tecnologias inovadoras em neuromodulação. Ela é um equipamento de última geração, projetado para oferecer tratamentos eficazes e seguros.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                Desenvolvido com tecnologia nacional e estrangeira, a Maximus é um Estimulador Magnético
                Transcraniano (EMT) de alta performance, projetado para atender diversas áreas médicas,
                incluindo neurologia, psiquiatria, reabilitação e outras especialidades.
              </p>
              <div className="flex flex-col text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                <h1 className="font-bold text-[#14B8A6] text-2xl">Acessórios compatíveis:</h1>
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

          <div className="bg-teal-50 border-l-4 border-[#14B8A6] rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-[#14B8A6]">Diferenciais da Maximus</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Alta Performance:</strong> A Maximus oferece uma performance superior, garantindo eficácia e segurança em cada aplicação.</li>
              <li><strong>Precisão:</strong> Com tecnologia avançada, permite a estimulação precisa de áreas específicas do cérebro, otimizando os resultados terapêuticos.</li>
              <li><strong>Versatilidade:</strong> Adequada para uma ampla gama de protocolos clínicos, atendendo às necessidades de diferentes especialidades médicas.</li>
              <li><strong>Design Ergonômico:</strong> Desenvolvida para proporcionar conforto ao paciente e facilidade de uso para o profissional de saúde.</li>
              <li><strong>Suporte Técnico e Treinamento:</strong> A Magvia oferece suporte técnico especializado e treinamento para garantir o uso eficaz do equipamento.</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">Para mais informações:</p>
            <a
              href="/contato"
              className="inline-block bg-[#14B8A6] hover:bg-[#0E9B8A] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              Falar com a gente
            </a>
          </div>
        </div>
        <div className="mt-16 w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-11/12 md:w-3/4">
            <figure
              className="group bg-white/90 rounded-2xl p-4 shadow-md hover:shadow-2xl transition transform duration-300 hover:-translate-y-1 flex items-center justify-center group-hover:ring-4 group-hover:ring-[#14B8A6] group-hover:ring-opacity-20
"
              aria-label="Paciente surpresa"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden flex items-center justify-center
                              bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                <img
                  src={mulherAssustada}
                  alt="Paciente demonstrando reação"
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            </figure>

            <figure
              className="group bg-white/90 rounded-2xl p-4 shadow-md hover:shadow-2xl transition transform duration-300 hover:-translate-y-1 flex items-center justify-center"
              aria-label="Paciente feliz"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden flex items-center justify-center
                              bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                <img
                  src={caraFeliz}
                  alt="Paciente feliz após tratamento"
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            </figure>

            <figure
              className="group bg-white/90 rounded-2xl p-4 shadow-md hover:shadow-2xl transition transform duration-300 hover:-translate-y-1 flex items-center justify-center"
              aria-label="Paciente feliz"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden flex items-center justify-center
                              bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                <img
                  src={caraFeliz}
                  alt="Paciente satisfeito"
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
