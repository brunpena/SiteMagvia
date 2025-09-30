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
        <footer className="bg-white">
        <div className="max-w-6xl mx-auto md:mb-[-20px] px-6 py-8 grid gap-6 md:grid-cols-3 items-center">
            
            {/* Logo */}
            <div className="flex justify-center md:justify-start gap-4">
            <img
                src="/logoMagviaComTexto.png"
                alt="Magvia Produtos Médicos"
                className="h-8 w-20 object-contain"
            />
            <img
                src="/logoEducere.png"
                alt="Educere"
                className="h-8 w-20 object-contain"
            />
            </div>

            {/* Links de navegação */}
            <nav className="flex justify-center gap-6" aria-label="Links do rodapé">
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

            {/* Redes sociais */}
            <div className="flex justify-center md:justify-end gap-4">
            <a
                href="https://www.youtube.com/@magviaequipamentosmedicos"
                aria-label="Youtube"
                className="p-2 rounded-md hover:bg-gray-100"
            >
                <Youtube size={18} />
            </a>
            <a
                href="https://www.instagram.com/magvia_oficial/#"
                aria-label="Instagram"
                className="p-2 rounded-md hover:bg-gray-100"
            >
                <Instagram size={18} />
            </a>
            <a
                href="https://www.linkedin.com/company/magvia-produtos-m%C3%A9dicos/?originalSubdomain=br"
                aria-label="Linkedin"
                className="p-2 rounded-md hover:bg-gray-100"
            >
                <Linkedin size={18} />
            </a>
            </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-500">
            
            <span>
                © {new Date().getFullYear()} Magvia Produtos Médicos. Todos os direitos
                reservados.
            </span>

            {/* Devs */}
            <div className="flex flex-wrap items-center gap-2">
                <span>Desenvolvido por</span>
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

            {/* Políticas */}
            <div className="flex flex-wrap gap-4">
                <a href={politica} download={politica} className="hover:text-gray-700">
                Política de Privacidade
                </a>
                <a href={termos} download={termos} className="hover:text-gray-700">
                Termos de Uso
                </a>
            </div>
            </div>
        </div>
        </footer>

    );
}
