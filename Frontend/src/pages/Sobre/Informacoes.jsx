import React, { useState } from "react";
import { Pagina } from "../../components/Layout/Pagina";
import { Brain, Activity, Heart, Smile, Zap, Shield } from 'lucide-react'
import { TypingText } from '../../components/Typing/TypingText'

export function Informacoes({
    title = "Benefícios Comprovados",
    subtitle = "Resultados científicos que transformam a vida dos pacientes",
    items = null,
}) {

    const [hovered, setHovered] = useState(null);

    const cards =
        items ||
        [
        {
            id: "depressao",
            icon: <Smile size={36} strokeWidth={1.8} className="text-blue-500" />,
            colorHex: "#3b82f6", 
            iconBg: "bg-blue-50",
            title: "Depressão",
            description:
            "Reduz custos com antidepressivos e auxilia na remissão de 69% dos pacientes.",
        },
        {
            id: "avc",
            icon: <Zap size={36} strokeWidth={1.8} className="text-teal-500" />,
            colorHex: "#14B8A6", 
            iconBg: "bg-teal-50",
            title: "AVC",
            description: "Reabilitação PÓS-AVC com nível A de evidência.",
        },
        {
            id: "dor",
            icon: <Shield size={36} strokeWidth={1.8} className="text-purple-700" />,
            colorHex: "#7D4C8F", 
            iconBg: "bg-purple-50",
            title: "Dor Crônica",
            description: "Melhora a dor de pacientes com dor crônica em até 50%.",
        },
        {
            id: "alzheimer",
            icon: <Brain size={36} strokeWidth={1.8} className="text-teal-500" />,
            colorHex: "#14B8A6", 
            iconBg: "bg-teal-50",
            title: "Alzheimer",
            description: "Retarda o declínio das funções cognitivas.",
        },
        ];

    function hexToRgba(hex, alpha = 0.18) {
        const h = hex.replace("#", "");
        const bigint = parseInt(h, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

  return (
    <Pagina>
        <div className='w-full'>
            <section className="py-20 bg-teal-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Áreas de Aplicação</h2>

                    <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12 text-justify">
                        O MAXIMUS EMT é utilizado em diversas especialidades médicas com resultados comprovados cientificamente
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch">
                        <article className="group bg-blue-500 rounded-2xl shadow-lg transition-colors duration-300 p-10 flex flex-col items-center justify-center hover:bg-blue-50 hover:border-2 hover:border-blue-500">
                        <div className="mb-6 p-3 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-blue-50 group-hover:border-1 group-hover:border-blue-500">
                            <Brain size={48} strokeWidth={2} className="text-white transition-colors duration-300 group-hover:text-blue-500" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase text-white transition-colors duration-300 group-hover:text-blue-500">
                            <TypingText text={"Psiquiatria"} />
                        </h3>
                        </article>

                        <article className="group bg-teal-500 rounded-2xl shadow-lg transition-colors duration-300 p-10 flex flex-col items-center justify-center hover:bg-teal-50 hover:border-2 hover:border-teal-500">
                        <div className="mb-6 p-3 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-teal-50 group-hover:border-2 group-hover:border-teal-500">
                            <Activity size={48} strokeWidth={2} className="text-white transition-colors duration-300 group-hover:text-teal-500" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase text-white transition-colors duration-300 group-hover:text-teal-500">
                            <TypingText text={"Neurologia"} />
                        </h3>
                        </article>

                        <article className="group bg-purple-700 rounded-2xl shadow-lg transition-colors duration-300 p-10 flex flex-col items-center justify-center hover:bg-purple-50 hover:border-2 hover:border-purple-700">
                        <div className="mb-6 p-3 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-purple-50 group-hover:border-2 group-hover:border-purple-700">
                            <Heart size={48} strokeWidth={2} className="text-white transition-colors duration-300 group-hover:text-purple-700" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase text-white transition-colors duration-300 group-hover:text-purple-700">
                            <TypingText text={"Fisioterapia"} />
                        </h3>
                        </article>
                    </div>
                </div>
            </section>
        </div>
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{title}</h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12 ">{subtitle}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                {cards.map((c) => {
                    const neutralBase = "0 6px 18px rgba(15, 23, 42, 0.2)"; 

                    const subtleColored = `0 8px 20px ${hexToRgba(c.colorHex, 0.1)}`;

                    const hoverColored = `0 20px 40px ${hexToRgba(c.colorHex, 0.2)}, 0 6px 18px rgba(15,23,42,0.04)`;

                    const isHovered = hovered === c.id;

                    const boxShadow = isHovered ? hoverColored : `${neutralBase}, ${subtleColored}`;

                    return (
                    <article
                        key={c.id}
                        onMouseEnter={() => setHovered(c.id)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(c.id)}
                        onBlur={() => setHovered(null)}
                        tabIndex={0}
                        aria-labelledby={`${c.id}-title`}

                        style={{
                        boxShadow,
                        }}
                        className={`bg-white rounded-2xl transition-transform duration-300 ease-out transform hover:-translate-y-1 p-8 flex flex-col items-center text-center focus:outline-none`}
                    >
                        <div className={`rounded-full p-3 mb-6 ${c.iconBg}`}>
                        {c.icon}
                        </div>

                        <h3 id={`${c.id}-title`} className="text-base sm:text-lg font-bold tracking-wide uppercase text-gray-800 mb-3">{c.title}</h3>

                        <p className="text-sm text-gray-500 leading-relaxed text-justify">{c.description}</p>
                    </article>
                    );
                })}
                </div>
            </div>
        </section>
    </Pagina>
  );
}