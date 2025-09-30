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
                Sobre a TDCS
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                A TDCS é um dos principais produtos da empresa brasileira Magvia Produtos Médicos Ltda,
                dedicada ao desenvolvimento de tecnologias inovadoras em neuromodulação.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                Desenvolvido com tecnologia nacional e estrangeira, a TDCS é um Estimulador Transcraniano
                Transcraniano (EMT) de alta performance, projetado para atender diversas áreas médicas,
                incluindo neurologia, psiquiatria, reabilitação e outras especialidades.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={productImg}
                alt="Maximus - Estimulador Magnético Transcraniano"
                className="w-full max-w-md rounded-2xl shadow-md object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#3B82F6] rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-[#3B82F6]">Diferenciais da TDCS</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Alta Performance:</strong> A TDCS oferece uma performance superior, garantindo eficácia e segurança em cada aplicação.</li>
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
