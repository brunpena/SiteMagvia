import React, { useState } from "react";
import { Smile, Zap, Shield, Brain } from "lucide-react";

export default function Beneficios({
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
            colorHex: "#3b82f6", // blue-500
            iconBg: "bg-blue-50",
            title: "Depressão",
            description:
            "Reduz custos com antidepressivos e auxilia na remissão de 69% dos pacientes.",
        },
        {
            id: "avc",
            icon: <Zap size={36} strokeWidth={1.8} className="text-emerald-500" />,
            colorHex: "#10b981", // emerald-500
            iconBg: "bg-emerald-50",
            title: "AVC",
            description: "Reabilitação PÓS-AVC com nível A de evidência.",
        },
        {
            id: "dor",
            icon: <Shield size={36} strokeWidth={1.8} className="text-rose-500" />,
            colorHex: "#fb7185", // rose-500
            iconBg: "bg-rose-50",
            title: "Dor Crônica",
            description: "Melhora a dor de pacientes com dor crônica em até 50%.",
        },
        {
            id: "alzheimer",
            icon: <Brain size={36} strokeWidth={1.8} className="text-violet-500" />,
            colorHex: "#8b5cf6", // violet-500
            iconBg: "bg-violet-50",
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
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{title}</h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12">{subtitle}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                {cards.map((c) => {
                    const neutralBase = "0 6px 18px rgba(15, 23, 42, 0.2)"; // sutil

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

                        <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                    </article>
                    );
                })}
                </div>
            </div>
        </section>
    );
}
