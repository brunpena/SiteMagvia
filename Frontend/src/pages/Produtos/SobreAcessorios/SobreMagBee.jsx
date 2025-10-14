import { Pagina } from "../../../components/Layout/Pagina";
import productImg from "/magBee.png"; 

export function SobreMagBee() {
  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] bg-gray-50 py-16 px-6">
        <div className="max-w-5xl bg-white shadow-lg rounded-2xl p-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14B8A6]">
                Conheça a MagBee
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                A MagBee traz a potência da Estimulação Magnética Transcraniana (EMT) em um formato compacto e inovador. 
                Com um design único em formato de banco, ela alia alto desempenho com praticidade, tornando-a um acessório indispensável para clínicas de ponta.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-justify">
                Desenvolvida com tecnologia nacional e internacional, a MagBee oferece performance de alto nível em um design ergonômico, ideal para otimizar o espaço e a eficiência no ambiente clínico.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={productImg}
                alt="MagBee - Estimulador Magnético Transcraniano"
                className="w-full max-w-md rounded-2xl shadow-md object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-[#14B8A6] rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-[#14B8A6]">Diferenciais da MagBee</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Compacta e Funcional:</strong> A MagBee combina potência com um design eficiente, ocupando pouco espaço e oferecendo alta performance.</li>
              <li><strong>Design Inovador:</strong> O formato de banco permite fácil adaptação e uso em ambientes clínicos, garantindo conforto ao paciente e praticidade para o profissional.</li>
              <li><strong>Alta Performance:</strong> Oferece a mesma eficácia dos estimuladores tradicionais, com uma abordagem moderna e acessível.</li>
              <li><strong>Versatilidade:</strong> Ideal para uma variedade de tratamentos e protocolos clínicos, atendendo às necessidades de múltiplas especialidades médicas.</li>
              <li><strong>Suporte e Treinamento:</strong> A Magvia oferece total suporte técnico e treinamento especializado para garantir o uso eficiente do equipamento.</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">Quer saber mais?</p>
            <a
              href="/contato"
              className="inline-block bg-[#14B8A6] hover:bg-[#0E9B8A] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
