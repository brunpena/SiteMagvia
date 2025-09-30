import { Pagina } from "../../components/Layout/Pagina"

export function SaibaMais() {
  return (
    <Pagina>
        <div className="flex flex-col items-center justify-center w-full min-h-[80vh] bg-gray-50 py-16 px-6">
        <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-10 space-y-8">
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 text-center">
            Saiba Mais
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Estamos em fase de certificação do <span className="font-semibold">1º Estimulador Magnético Transcraniano do Brasil</span>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Para isso, estamos <span className="font-semibold">incubados na Fundação Educere</span>, recebendo todo o apoio necessário para que possamos entregar um produto que atenda às normas e ofereça a qualidade desejada, permitindo que os profissionais apliquem protocolos regulamentados com segurança.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-purple-700">Nosso Contato</h2>
            <p className="text-gray-800">
                <span className="font-semibold">Felipe Vidal de Oliveira Duarte</span> – Diretor Executivo / CEO<br />
                <a href="mailto:felipe@magvia.com.br" className="text-purple-600 hover:underline">
                felipe@magvia.com.br
                </a>
            </p>
            <p className="text-gray-800">
                <span className="font-semibold">João Reni Lisot Lico</span> – Diretor de Engenharia e Pesquisa<br />
                <a href="mailto:joao.reni@magvia.com.br" className="text-purple-600 hover:underline">
                joao.reni@magvia.com.br
                </a>
            </p>
            </div>

            <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">Ou, se preferir, deixe seu contato conosco:</p>
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
