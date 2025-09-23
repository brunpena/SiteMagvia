import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function cadastroEmail({
    title = "Fique por dentro das novidades!",
    subtitle = "Cadastre-se e receba informações sobre lançamentos e atualizações do MAXIMUS EMT",
    placeholder = "Seu melhor e-mail",
    buttonText = "Cadastrar",
    onSubmit = null,
    }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); 
    const [error, setError] = useState("");

    function validateEmail(e) {
        return /\S+@\S+\.\S+/.test(e);
    }

    async function handleSubmit(e) {
        e.preventDefault();
            setError("");
            if (!validateEmail(email)) {
            setError("Digite um e-mail válido.");
            return;
        }

        setStatus("sending");
        try {
            if (onSubmit && typeof onSubmit === "function") {
                await onSubmit(email); 
            } else {
                console.log("Enviar e-mail para:", email);
                await new Promise((r) => setTimeout(r, 800));
            }
            setStatus("success");
            setEmail("");
        } catch (err) {
            console.error(err);
            setStatus("error");
            setError("Ocorreu um problema. Tente novamente.");
        } finally {
        setTimeout(() => {
            setStatus("idle");
            setError("");
            }, 3000);
        }
    }

    return (
        <section className="py-20 bg-teal-50">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <div
                        className="rounded-2xl p-12 bg-teal-500 text-white shadow-lg"
                        aria-labelledby="newsletter-title"
                    >
                        <div className="flex flex-col items-center">
                            <div className="bg-white/10 rounded-full p-3 mb-6">
                                <Mail size={34} strokeWidth={1.6} className="text-white" />
                            </div>

                            <h2 id="newsletter-title" className="text-2xl sm:text-3xl font-extrabold mb-3">
                                {title}
                            </h2>

                            <p className="text-sm sm:text-base text-white/90 mb-8">
                                {subtitle}
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col sm:flex-row items-center justify-center gap-4"
                                role="form"
                                noValidate
                            >
                                <label htmlFor="newsletter-email" className="sr-only">
                                Email
                                </label>

                                <input
                                id="newsletter-email"
                                type="email"
                                value={email}
                                onChange={(ev) => setEmail(ev.target.value)}
                                placeholder={placeholder}
                                className="w-full sm:w-auto flex-1 min-w-0 px-4 py-3 rounded-lg placeholder:text-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/40 shadow-inner bg-white"
                                aria-invalid={!!error}
                                aria-describedby={error ? "newsletter-error" : undefined}
                                />

                                <button
                                type="submit"
                                className={`px-6 py-3 rounded-lg font-medium shadow-md transition-transform active:scale-95 ${
                                    status === "sending"
                                    ? "opacity-80 cursor-wait"
                                    : "hover:-translate-y-0.5"
                                }`}
                                disabled={status === "sending"}
                                style={{
                                    background: "white",
                                    color: "#065fd6",
                                }}
                                >
                                {status === "sending" ? "Enviando..." : buttonText}
                                </button>
                            </form>

                            <div className="mt-4 min-h-[1.25rem]">
                                {status === "success" && (
                                <p className="text-sm text-white/95">Obrigado! Você foi inscrito.</p>
                                )}
                                {status === "error" && (
                                <p id="newsletter-error" className="text-sm text-white/95">
                                    {error || "Erro ao enviar."}
                                </p>
                                )}
                                {error && status !== "error" && (
                                <p id="newsletter-error" className="text-sm text-white/95">
                                    {error}
                                </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
