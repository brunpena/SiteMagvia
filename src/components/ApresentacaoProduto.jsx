import React from "react";
import productImg from "../assets/maximus.png"; // ajuste o caminho se necessário

export default function ApresentacaoProduto() {
    return (
        <section className="overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-20 lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-center ">
            {/* LEFT */}
            <div className="lg:pr-8 flex flex-col items-start justify-center space-y-8">
                <div className="w-64 md:w-80 lg:w-96 max-w-full overflow-hidden rounded-sm">
                    <img
                    src="/image.png"            
                    alt="MAXIMUS EMT"
                    className="w-full h-auto object-contain block"
                    />
                </div>

                <p className="text-gray-600 text-xl md:text-xl max-w-xl leading-7">
                    Tecnologia avançada em neuromodulação não invasiva para tratamentos
                    eficazes e seguros.
                </p>

                <div className="flex items-center space-x-4">
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
                    Faça um Orçamento &nbsp;→
                    </button>

                    <button className="flex items-center gap-3 px-5 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition">
                    <span className="rounded-full w-6 h-6 flex items-center justify-center border border-blue-300">
                        ▶
                    </span>
                    <span>Saiba Mais</span>
                    </button>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
                
                {/* use import acima para imagens dentro de src */}
                <img
                src={productImg}
                alt="MAXIMUS EMT"
                className=""
                />
            </div>
        </div>
        </section>
    );
}


// import React from "react";
// import productImg from "../assets/maximus.png"; // ajuste o caminho se necessário

// export default function ApresentacaoProduto() {
//     return (
//         <div className="w-full flex flex-col lg:flex-row items-center justify-around px-8 lg:px-14 py-20 lg:py-28 space-y-12 lg:space-y-0 lg:space-x-12">
//             {/* Left */}
//             <div className=" flex flex-col items-start justify-center space-y-8">
//                 <div className="w-64 md:w-80 lg:w-96 max-w-full overflow-hidden rounded-sm">
//                     <img
//                     src="/image.png"            
//                     alt="MAXIMUS EMT"
//                     className="w-full h-auto object-contain block"
//                     />
//                 </div>

//                 <p className="text-gray-600 text-xl md:text-xl max-w-xl leading-7">
//                     Tecnologia avançada em neuromodulação não invasiva para tratamentos
//                     eficazes e seguros.
//                 </p>

//                 <div className="flex items-center space-x-4">
//                     <button className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
//                     Faça um Orçamento &nbsp;→
//                     </button>

//                     <button className="flex items-center gap-3 px-5 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition">
//                     <span className="rounded-full w-6 h-6 flex items-center justify-center border border-blue-300">
//                         ▶
//                     </span>
//                     <span>Saiba Mais</span>
//                     </button>
//                 </div>
//             </div>
//             {/* Right */}
//             <div className="flex justify-center lg:justify-end">
//                 <img
//                 src={productImg}
//                 alt="MAXIMUS EMT"
//                 className="w-[30vw]"
//                 />
//             </div>
//         </div>
//     )
// };