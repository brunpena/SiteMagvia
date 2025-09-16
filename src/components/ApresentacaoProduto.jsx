import React from "react";
import productImg from "/max.png"; 
import { TypingText } from "./TypingText";
import { IceCream, MoreHorizontalIcon } from "lucide-react";

export default function ApresentacaoProduto() {
    const texto = "Bom dia! Gostaria de fazer um orçamento.";

    return (
        <> 
            <section className="overflow-x-hidden pt-18">
                <div className="max-w-7xl mx-auto px-8  lg:px-14 grid grid-cols-1 lg:grid-cols-2 items-center ">
                    <div className="lg:pr-8 flex flex-col items-start justify-center space-y-8">
                        <div className="w-64 md:w-80 lg:w-96 max-w-full overflow-hidden rounded-sm">
                            <img
                            src="/image.png"            
                            alt="MAXIMUS EMT"
                            className="w-full h-auto object-contain block"
                            />
                        </div>

                        <p className="text-gray-600 text-xl md:text-xl max-w-xl leading-7 text-justify">
                            <TypingText text="Tecnologia avançada em neuromodulação não invasiva para tratamentos eficazes e seguros." speed={40} />
                        </p>

                        <div className="flex items-center space-x-4">
                            <a href={`https://wa.me/4498322222?text=${encodeURIComponent(texto)}`} className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
                            Faça um Orçamento &nbsp;→
                            </a>

                            <a href="/saibamais" className="flex items-center gap-3 px-5 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition">
                                <span className="rounded-full w-6 h-6 flex items-center justify-center border border-blue-300">
                                    <MoreHorizontalIcon className="w-4 h-4 text-blue-500" />
                                </span>
                                <span>Saiba Mais</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                        src={productImg}
                        alt="MAXIMUS EMT"
                        className=""
                        />
                    </div>
                </div>
            </section>
            <div className="mt-16 bg-gray-50 w-full h-full flex flex-col">
                <h1 className="text-7xl font-bold p-10">O que é EMT?</h1>
                <div className="w-full h-full flex flex-row justify-between p-10 text-2xl text-justify">
                    <div className="flex-1 w-1/2 m-4">
                        <p>
                            EMT (Estimulação Magnética Transcraniana) é uma técnica inovadora de neuromodulação não invasiva que utiliza campos magnéticos para estimular áreas específicas do cérebro. É uma abordagem promissora para o tratamento de diversas condições neurológicas e psiquiátricas.
                        </p>
                        <br />
                        <p>
                            A técnica é indolor e não requer anestesia, tornando-a uma opção atraente para pacientes que buscam alternativas a tratamentos mais invasivos. Além disso, a EMT tem mostrado resultados promissores em estudos clínicos, com muitos pacientes relatando melhorias significativas em seus sintomas.
                        </p>
                        <br />
                        <p>
                            A EMT é amplamente utilizada no tratamento de depressão resistente ao tratamento, transtornos de ansiedade, dor crônica, reabilitação pós-AVC e outras condições neurológicas. A técnica é segura e bem tolerada, com poucos efeitos colaterais relatados.
                        </p>
                        <br />
                        <p>
                            Em resumo, a EMT é uma técnica inovadora e promissora de neuromodulação não invasiva que oferece uma abordagem segura e eficaz para o tratamento de diversas condições neurológicas e psiquiátricas.
                        </p>
                    </div>
                    <div className="flex-1 w-1/2 m-4">
                        <img src="/imagemIlustrativa.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-16 w-full h-full flex flex-col">
                <h1 className="text-7xl font-bold p-10">Como essa tecnologia poderia te ajudar?</h1>
                <div className="w-full h-full flex flex-row justify-between p-10 text-2xl text-justify">
                    <div className="flex-1 w-1/2 m-4">
                        <p>
                            A Estimulação Magnética Transcraniana (EMT) é uma técnica inovadora que pode oferecer diversos benefícios para a saúde mental e neurológica. Aqui estão algumas maneiras pelas quais a EMT pode ajudar:
                        </p>
                        <br />
                        <ol className="list-disc list-inside">
                            <li className="mb-4">
                                Eficaz e não invasivo:
                                    A Estimulação Magnética Transcraniana (EMT) é uma opção de tratamento não invasivo para várias condições de saúde mental, incluindo a depressão. Estudos clínicos demonstraram que a EMT pode reduzir os sintomas depressivos significativamente em pacientes que não respondem aos tratamentos tradicionais
                            </li>
                            <li className="mb-4">
                                Melhora a função cognitiva:
                                    A EMT tem mostrado potencial para melhorar a função cognitiva em pacientes com transtornos neurológicos, como o AVC e a doença de Alzheimer. A estimulação magnética pode ajudar a restaurar a conectividade neural e melhorar a memória, atenção e outras funções cognitivas.
                            </li>
                            <li className="mb-4">
                                Tratamento personalizado:
                                    A EMT pode ser adaptada para atender às necessidades individuais de cada paciente. A frequência, intensidade e localização da estimulação podem ser ajustadas para otimizar os resultados do tratamento.
                            </li>
                        </ol>
                        <br />
                        <a href={`https://wa.me/4498322222?text=${encodeURIComponent(texto)}`} className="flex items-center gap-3 px-5 py-3 justify-center rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition">
                            Saiba Mais com um de nossos especialistas! &nbsp;→
                        </a>
                    </div>
                    <video src="/videoExemplo.mp4" controls className="w-1/2 m-4"></video>

                </div>
            </div>
        </>
    );
}