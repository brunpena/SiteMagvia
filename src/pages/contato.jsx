import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Pagina } from "../components/pagina";
import { useState } from "react";

export function Contato() {
  const texto = "Olá, gostaria de mais informações.";
  const [form, setForm] = useState({ email: "", nome: "", telefone: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form enviado:", form);
  };

  async function EnviarMensagem(e) {
    e.preventDefault();
    
    try {
      if (!form.email || !form.nome || !form.telefone || !form.mensagem) {
        alert("Preencha todos os campos!")
        return
      }

      const response = await fetch(`http://127.0.0.1:3000/enviarEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error(`Erro ao enviar mensagem: ${response.statusText}`)
      }

      const dados = await response.json()
      alert("Mensagem enviada com sucesso!")
      setForm({ email: "", nome: "", telefone: "", mensagem: "" })

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] p-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Contato</h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12">
          Se você tiver alguma dúvida ou precisar de mais informações, preencha o formulário abaixo e entraremos em contato.
        </p>

        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-xl bg-white shadow-md rounded-xl p-8 space-y-6"
        >
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Endereço de E-mail *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Ex. John Doe"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Ex. +1 300 400 5000"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Mensagem</label>
            <input
              type="text"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Digite sua mensagem aqui..."
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            onClick={EnviarMensagem}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
          >
            Enviar mensagem
          </button>
        </form>
        <br />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ou entre em contato conosco!</h2>

        <div className="flex flex-row gap-8 text-3xl">
          <IconLink href="https://www.instagram.com/magvia_oficial/#" color="pink">
            <FaInstagram />
          </IconLink>
          <IconLink href={`https://wa.me/44999272304?text=${encodeURIComponent(texto)}`} color="green">
            <FaWhatsapp />
          </IconLink>
          <IconLink href="mailto:felipe@magvia.com.br" color="red">
            <FaEnvelope />
          </IconLink>
        </div>
      </div>
    </Pagina>
  );
}

function IconLink({ href, color, children }) {
  const colorClasses = {
    pink: "text-pink-600 hover:text-pink-800",
    green: "text-green-500 hover:text-green-700",
    red: "text-red-500 hover:text-red-700"
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`transition-colors ${colorClasses[color]}`}>
      {children}
    </a>
  );
}
