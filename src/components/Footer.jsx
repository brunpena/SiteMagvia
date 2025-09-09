import React from "react";
import { Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react";
import politica from "/politicaPrivacidade.pdf";
import termos from "/termosUso.pdf";

export default function Footer({
    links = [
        { label: "Sobre", href: "/sobreNos" },
        { label: "Produtos", href: "/produtos" },
        { label: "Contato", href: "/contato" },
    ],
}) {
    return (
        <footer className="mt-12">
            <div className="bg-white">
                {/* Topo do Footer */}
                <div className="max-w-6xl mx-auto px-6 pt-6 pb-2 flex flex-col md:flex-row items-center justify-between gap-4">
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

                {/* Linha divisória */}
                <div className="border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                        <span>© {new Date().getFullYear()} Magvia Produtos Médicos. Todos os direitos reservados.</span>

                        <div className="flex items-center gap-1 mt-2 md:mt-0">
                            <a href="https://github.com/PedrinnhoUtumi" className="text-gray-500 ">
                                <Github size={16} className="text-gray-500 hover:text-purple-500" />
                            </a>
                            <span className="ml-1">Site feito por:</span>
                            <a href="https://www.linkedin.com/in/pedro-felipe-onofre-utumi-4bb71a30b/" className="ml-1 text-gray-700 hover:text-purple-500 font-medium">
                                Pedro Felipe Onofre Utumi
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
