import { Pagina } from "../../components/Layout/Pagina";
import { TypingText } from "../../components/Typing/TypingText";
import { IceCream, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import productImg from "/max.png"; 


export function PaginaPrincipal() {
    const texto = "Bom dia! Gostaria de fazer um orçamento.";

  return (
    <Pagina>
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
        <section className="mt-16 bg-gray-50 w-full h-full flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-6 sm:p-10 text-center lg:text-left">
                O que é EMT?
            </h1>
            <div className="w-full h-full flex flex-col lg:flex-row justify-between p-6 sm:p-10 text-base sm:text-lg md:text-xl lg:text-2xl text-justify">
                <div className="flex-1 lg:w-1/2 m-2 sm:m-4">
                    <p>
                        A Estimulação Magnética Transcraniana (EMT) é uma técnica avançada de neuromodulação não invasiva que utiliza campos magnéticos para estimular regiões específicas do cérebro. Por meio dessa abordagem, é possível modular a atividade neural de forma precisa, oferecendo novas perspectivas no tratamento de condições neurológicas e psiquiátricas.
                    </p>
                    <br />
                    <p>
                        Uma das grandes vantagens da EMT é que o procedimento é indolor e não requer anestesia, o que o torna uma alternativa atraente para pacientes que desejam evitar intervenções invasivas ou medicamentos de longo prazo. Além disso, a técnica permite sessões relativamente rápidas e seguras, facilitando sua aplicação clínica.
                    </p>
                    <br />
                    <p>
                        Estudos clínicos têm demonstrado resultados promissores, especialmente em casos de depressão resistente ao tratamento, transtornos de ansiedade, dor crônica e reabilitação pós-AVC. Muitos pacientes relatam melhorias significativas nos sintomas, reforçando o potencial terapêutico da EMT como complemento ou alternativa aos tratamentos tradicionais.
                    </p>
                    <br />
                    <p>
                        Em resumo, a Estimulação Magnética Transcraniana se apresenta como uma opção inovadora, segura e eficaz para a neuromodulação. Sua aplicação crescente e bem-sucedida em diversas condições mostra que a técnica pode transformar o manejo de doenças neurológicas e psiquiátricas, oferecendo aos pacientes uma abordagem moderna e minimamente invasiva.
                    </p>
                </div>
                <div className="flex-1 lg:w-1/2 m-2 sm:m-4 flex justify-center">
                    <img src="/imagemIlustrativa.png" alt="" className="max-w-full h-auto rounded-lg shadow-md" />
                </div>
            </div>
        </section>

        <section className="mt-16 w-full h-full flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-6 sm:p-10 text-center lg:text-left">
                Como essa tecnologia poderia te ajudar?
            </h1>
            <div className="w-full h-full flex flex-col lg:flex-row justify-between p-6 sm:p-10 text-base sm:text-lg md:text-xl lg:text-2xl text-justify">
                <div className="flex-1 lg:w-1/2 m-2 sm:m-4">
                    <p>
                        A Estimulação Magnética Transcraniana (EMT) é uma técnica inovadora que oferece diversos benefícios para a saúde mental e neurológica. Confira algumas das principais vantagens da EMT:
                    </p>
                    <br />
                    <ol className="list-disc list-inside space-y-4">
                        <li>
                            <strong>Tratamento eficaz e não invasivo:</strong> A EMT é uma opção segura e não invasiva para diversas condições de saúde mental, incluindo depressão resistente a tratamentos tradicionais. Estudos clínicos mostram que ela pode reduzir significativamente os sintomas depressivos.
                        </li>
                        <li>
                            <strong>Melhora da função cognitiva:</strong> Em pacientes com transtornos neurológicos, como AVC ou Alzheimer, a EMT pode ajudar a restaurar a conectividade neural, promovendo melhorias em memória, atenção e outras funções cognitivas.
                        </li>
                        <li>
                            <strong>Tratamento personalizado:</strong> O protocolo da EMT pode ser adaptado às necessidades individuais do paciente, ajustando frequência, intensidade e local da estimulação para otimizar os resultados.
                        </li>
                    </ol>

                    <br />
                    <a
                        href={`https://wa.me/4498322222?text=${encodeURIComponent(texto)}`}
                        className="flex items-center gap-3 px-5 py-3 justify-center rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition text-sm sm:text-base"
                    >
                        Saiba Mais com um de nossos especialistas! &nbsp;→
                    </a>
                </div>
                <div className="flex-1 lg:w-1/2 m-2 sm:m-4 flex justify-center">
                    <video controls poster="/logoMagviaComTexto.png" className="w-full max-w-xl rounded-lg shadow-md">
                        <source src="/videoplayback.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>

    </Pagina>
  );
} 
