import React from "react";
import { Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react";
import politica from "/politicaPrivacidade.pdf";
import termos from "/termosUso.pdf";

export function Footer({
    links = [
        { label: "Sobre", href: "/sobreNos" },
        { label: "Produtos", href: "/produtos" },
        { label: "Contato", href: "/contato" },
    ],
}) {
    return (
        <footer className="">
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-6 pt-6  flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img src="/logoMagviaComTexto.png" alt="Magvia Produtos Médicos" className="h-8 w-20" />
                        <img src="/logoEducere.png" alt="Educere" className="h-8 w-20" />
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
                        <a href="https://www.youtube.com/@magviaequipamentosmedicos" aria-label="Youtube" className="p-2 rounded-md hover:bg-gray-100">
                            <Youtube size={18} />
                        </a>
                        <a href="https://www.instagram.com/magvia_oficial/#" aria-label="Instagram" className="p-2 rounded-md hover:bg-gray-100">
                            <Instagram size={18} />
                        </a>
                        <a href="https://www.linkedin.com/company/magvia-produtos-m%C3%A9dicos/?originalSubdomain=br" aria-label="Linkedin" className="p-2 rounded-md hover:bg-gray-100">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                        <span>© {new Date().getFullYear()} Magvia Produtos Médicos. Todos os direitos reservados.</span>

                        <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-0 text-sm text-gray-700">
                            <span className="mr-1">Desenvolvido por</span>

                            <a
                                href="https://github.com/PedrinnhoUtumi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-2 py-1 rounded-full border border-gray-300 bg-white text-gray-800 font-mono text-xs hover:bg-gray-100 transition"
                            >
                                <span className="text-purple-600">&lt;PedrinnhoUtumi/&gt;</span>
                                <Github size={14} className="text-gray-500" />
                            </a>
                            
                            <a
                                href="https://github.com/brunpena"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-2 py-1 rounded-full border border-gray-300 bg-white text-gray-800 font-mono text-xs hover:bg-gray-100 transition"
                            >
                                <span className="text-purple-600">&lt;brunpena/&gt;</span>
                                <Github size={14} className="text-gray-500" />
                            </a>

                        </div>

                        <div className="flex gap-4 mt-3 md:mt-0">
                            <a href={politica} download={politica} className="hover:text-gray-700">Política de Privacidade</a>
                            <a href={termos} download={termos} className="hover:text-gray-700">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
