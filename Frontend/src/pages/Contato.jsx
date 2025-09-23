import { FaEnvelope, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock, FaCopy } from "react-icons/fa";
import { Pagina } from "../components/pagina";
import { useState } from "react";

export function Contato() {
  const texto = "Olá, gostaria de mais informações.";
  const [form, setForm] = useState({
    email: "",
    nome: "",
    telefone: "",
    mensagem: "",
  });

  // Dados visíveis de contato (faça alterações aqui se quiser)
  const contatoVisivel = {
    email: "contato@magvia.com.br",
    telefoneE164: "+5544999272304", // formato E.164 para links
    telefoneExibicao: "+55 (44) 99927-2304",
    whatsappE164: "5544999272304", // sem sinal para wa.me
    instagram: "magvia_oficial",
    endereco: "Fundação Educere, Campo Mourão - PR",
    horario: "Seg–Sex, 08:00–18:00",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // se quiser manter envio local, chamar EnviarMensagem no onSubmit ou no botão
    console.log("Form submit (local):", form);
  };

  async function EnviarMensagem(e) {
    e.preventDefault();

    try {
      if (!form.email || !form.nome || !form.telefone || !form.mensagem) {
        alert("Preencha todos os campos!");
        return;
      }

      const response = await fetch(`http://127.0.0.1:3000/enviarEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar mensagem: ${response.statusText}`);
      }

      const dados = await response.json();
      setForm({ email: "", nome: "", telefone: "", mensagem: "" });
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
    }
  }

  function copyToClipboard(text, label = "Texto") {
    if (!navigator?.clipboard) {
      alert("Seu navegador não suporta copiar automaticamente. Selecione e copie manualmente.");
      return;
    }
    navigator.clipboard.writeText(text).then(
      () => true,
      () => alert("Não foi possível copiar.")
    );
  }

function checkNumber() {
  let numero = form.telefone.trim();
  const regex = /^\+?[1-9]\d{7,14}$/;
  return regex.test(numero.replace(/\s+/g, "")); 
}



  return (
    <Pagina>
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] p-6 mt-4">
        <div className="w-full max-w-6xl flex flex-col gap-8">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white shadow-md rounded-xl p-8 space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
              Contato
            </h1>
            <p className="max-w-3xl text-gray-600 text-base mb-6 text-justify">
              Se você tiver alguma dúvida ou precisar de mais informações, preencha o formulário abaixo e entraremos em contato.
            </p>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Endereço de E-mail *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex. gerivaldoantunes@gmail.com"
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Nome *</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Ex. Gerivaldo Antunes"
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Telefone *</label>
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="Ex. +55 (12) 9 1234-5678"
                required
                className={`border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 ${checkNumber() ? "border-green-400 focus:ring-green-400" : "border-red-400 focus:ring-red-400"}`}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Mensagem *</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                maxLength={3000}
                onChange={handleChange}
                placeholder="Digite sua mensagem aqui...(máx. 3000 caracteres)"
                rows={5}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-y"
              />
              <p className="text-sm text-gray-500 mt-1">
                {form.mensagem.length}/3000
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                onClick={EnviarMensagem}
                className="flex-1 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300"
              >
                Enviar mensagem
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({ email: "", nome: "", telefone: "", mensagem: "" });
                }}
                className="flex-1 border cursor-pointer border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-lg transition"
              >
                Limpar
              </button>
            </div>
          </form>

          <div className="w-full bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">Informações de contato</h1>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${contatoVisivel.email}`}
                        className="font-medium text-gray-800 hover:underline"
                      >
                        {contatoVisivel.email}
                      </a>
                      <button
                        onClick={() => copyToClipboard(contatoVisivel.email, "E-mail")}
                        className="ml-2 text-gray-400 cursor-pointer hover:text-gray-600"
                        aria-label="Copiar email"
                      >
                        <FaCopy />
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">Resposta em até 48h útil</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhone className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${contatoVisivel.telefoneE164}`}
                        className="font-medium text-gray-800 hover:underline"
                      >
                        {contatoVisivel.telefoneExibicao}
                      </a>
                      <button
                        onClick={() => copyToClipboard(contatoVisivel.telefoneE164, "Telefone")}
                        className="ml-2 text-gray-400 cursor-pointer hover:text-gray-600"
                        aria-label="Copiar telefone"
                      >
                        <FaCopy />
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">Atendimento via WhatsApp durante o horário informado</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaWhatsapp className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <a
                      href={`https://wa.me/${contatoVisivel.whatsappE164}?text=${encodeURIComponent(texto)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-800 hover:underline"
                    >
                      Conversar pelo WhatsApp
                    </a>
                    <div className="text-sm text-gray-500">Clique para abrir uma conversa</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaInstagram className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <a
                      href={`https://www.instagram.com/${contatoVisivel.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-800 hover:underline"
                    >
                      @{contatoVisivel.instagram}
                    </a>
                    <div className="text-sm text-gray-500">Siga-nos para novidades e posts técnicos</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">{contatoVisivel.endereco}</div>
                    <div className="text-sm text-gray-500">Rua São José, 2829 (Sala 003) — Área Urbanizada II, Campo Mourão</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <div className="font-medium text-gray-800">{contatoVisivel.horario}</div>
                    <div className="text-sm text-gray-500">Atendimento comercial</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${contatoVisivel.email}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 py-2 rounded-lg hover:shadow-sm transition"
              >
                <FaEnvelope /> Enviar e-mail
              </a>

              <a
                href={`https://wa.me/${contatoVisivel.whatsappE164}?text=${encodeURIComponent(texto)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              >
                <FaWhatsapp /> Abrir WhatsApp
              </a>

              <a
                href={`https://www.instagram.com/${contatoVisivel.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-800 py-2 rounded-lg hover:shadow-sm transition"
              >
                <FaInstagram /> Visitar Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
