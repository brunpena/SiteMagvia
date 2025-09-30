import { Pagina } from "../../../components/Layout/Pagina";
import productImg from "/maxClinic.png";
import acessorio1 from "/BobSimples.png"
import acessorio2 from "/BobDupla.png"
import acessorio3 from "/magBee.png"

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
                A Maximus é o principal produto da empresa brasileira Magvia Produtos Médicos Ltda,
                dedicada ao desenvolvimento de tecnologias inovadoras em neuromodulação.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                Desenvolvido com tecnologia nacional e estrangeira, a Maximus é um Estimulador Magnético
                Transcraniano (EMT) de alta performance, projetado para atender diversas áreas médicas,
                incluindo neurologia, psiquiatria, reabilitação e outras especialidades.
              </p>
              <div className="flex flex-col text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                <h1 className="font-bold text-purple-700 text-2xl">Acessórios compatíveis:</h1>
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
