import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer({
    links = [
        { label: "Sobre", href: "/sobre" },
        { label: "Produtos", href: "/produtos" },
        { label: "Contato", href: "/contato" },
    ],
    }) {
    return (
        <footer className="mt-12">
            {/* Barra inferior com links e social */}
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="font-bold text-lg text-gray-800">MAXIMUS EMT</div>
                        <span className="text-sm text-gray-500">• Soluções em terapia eletromagnética</span>
                    </div>

                    <nav className="flex gap-6 items-center" aria-label="Links do rodapé">
                        {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm text-gray-600 hover:text-gray-900"
                        >
                            {l.label}
                        </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-gray-100">
                        <Twitter size={18} />
                        </a>
                        <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-gray-100">
                        <Instagram size={18} />
                        </a>
                        <a href="#" aria-label="Linkedin" className="p-2 rounded-md hover:bg-gray-100">
                        <Linkedin size={18} />
                        </a>
                    </div>
                    </div>

                    <div className="border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                        <span>© {new Date().getFullYear()} MAXIMUS EMT. Todos os direitos reservados.</span>
                        <div className="flex gap-4 mt-3 md:mt-0">
                        <a href="/privacidade" className="hover:text-gray-700">Política de Privacidade</a>
                        <a href="/termos" className="hover:text-gray-700">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
