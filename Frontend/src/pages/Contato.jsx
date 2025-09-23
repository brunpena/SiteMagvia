import { FaEnvelope, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock, FaCopy, FaFlag } from "react-icons/fa";
import { Pagina } from "../components/pagina";
import { useState } from "react";
import { BR, US, ES, FR } from "country-flag-icons/react/3x2";

export function Contato() {
  const texto = "Olá, gostaria de mais informações.";
  const [form, setForm] = useState({
    email: "",
    nome: "",
    telefone: "",
    mensagem: "",
  });

  const FLAGS = {BR, US, ES, FR};
  const [paisSelecionado, setPaisSelecionado] = useState("BR"); 

  const contatoVisivel = {
    email: "contato@magvia.com.br",
    telefoneE164: "+5544999272304", 
    telefoneExibicao: "+55 (44) 99927-2304",
    whatsappE164: "5544999272304", 
    instagram: "magvia_oficial",
    endereco: "Fundação Educere, Campo Mourão - PR",
    horario: "Seg–Sex, 08:00–18:00",
  };

  function formatPhoneNumber(value) {
    switch (paisSelecionado) {
      case "BR":
        let vBr = value.replace(/\D/g, "");

        if (vBr.startsWith("55")) {
          vBr = "+" + vBr;
        } else if (!vBr.startsWith("+")) {
          vBr = "+".concat(vBr);
        }

        if (vBr.length > 3) {
          vBr = vBr.replace(/^(\+\d{2})(\d{2})(\d{5})(\d{0,4}).*/, "$1 ($2) $3-$4");
        } else if (vBr.length > 2) {
          vBr = vBr.replace(/^(\+\d{2})(\d*)/, "$1 $2");
        }

        return vBr.trim();
      case "US":
        let vUs = value.replace(/\D/g, "");

        if (vUs.startsWith("1")) {
          vUs = "+" + vUs;
        } else if (!vUs.startsWith("+")) {
          vUs = "+".concat(vUs);
        }

        if (vUs.length > 3) {
          vUs = vUs.replace(/^(\+\d{1})(\d{3})(\d{3})(\d{0,4}).*/, "$1 ($2) $3-$4");
        } else if (vUs.length > 2) {
          vUs = vUs.replace(/^(\+\d{1})(\d*)/, "$1 $2");
        }

        return vUs.trim();
      case "ES":
        let vEs = value.replace(/\D/g, "");

        if (vEs.startsWith("34")) {
          vEs = "+" + vEs;
        } else if (!vEs.startsWith("+")) {
          vEs = "+".concat(vEs);
        }

        if (vEs.length > 3) {
          vEs = vEs.replace(
            /^(\+34)(\d{3})(\d{3})(\d{0,3}).*/,
            "$1 $2 $3 $4"
          );
        } else if (vEs.length > 2) {
          vEs = vEs.replace(/^(\+\d{2})(\d*)/, "$1 $2");
        }

        return vEs.trim();
      case "FR":
        let vFr = value.replace(/\D/g, "");
        
        if (vFr.startsWith("33")) {
          vFr = "+" + vFr;
        } else if (!vFr.startsWith("+")) {
          vFr = "+".concat(vFr);
        }
        
        if (vFr.length > 3) {
          vFr = vFr.replace(
            /^(\+33)(\d{1})(\d{2})(\d{2})(\d{2})(\d{0,2}).*/,
            "$1 $2 $3 $4 $5 $6"
          );
        } else if (vFr.length > 2) {
          vFr = vFr.replace(/^(\+\d{2})(\d*)/, "$1 $2");
        }

        return vFr.trim();

      default:
        break;
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefone") {
      setForm({ ...form, telefone: formatPhoneNumber(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  function checkNumber(number) {
    switch (paisSelecionado) {
      case "BR":
        return number.startsWith("+55") && number.length === 19;
      case "US":
        return number.startsWith("+1") && (number.length === 17 || number.length === 18);
      case "ES":
        return number.startsWith("+34") && number.length === 15;
      case "FR":
        return number.startsWith("+33") && number.length === 17;
      default:
        break;
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function verificarPlaceholders() {
    switch (paisSelecionado) {
      case "BR":
        return "Ex. +55 (12) 92764-9823";
      case "US":
        return "Ex. +1 (202) 555-0123";
      case "ES":
        return "Ex. +34 612 34 56 78";
      case "FR":
        return "Ex. +33 1 23 45 67 89";
      default:
        break;
    }
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
              <label className="text-gray-700 mb-2">Endereço de E-mail <strong className="text-red-600">*</strong></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex. gerivaldoantunes@gmail.com"
                required
                className={`border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  form.email && (validateEmail(form.email) ? "border-green-400 focus:ring-green-400" : "border-red-400 focus:ring-red-400")
                }`}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Nome <strong className="text-red-600">*</strong></label>
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
              <label className="text-gray-700 mb-2">Telefone <strong className="text-red-600">*</strong></label>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 bg-white">
                  <select
                    value={paisSelecionado}
                    onChange={(e) => setPaisSelecionado(e.target.value)}
                    className="bg-transparent h-9 focus:outline-none cursor-pointer"
                  >
                    <option className="cursor-pointer" value="BR">+55</option>
                    <option className="cursor-pointer" value="US">+1</option>
                    <option className="cursor-pointer" value="ES">+34</option>
                    <option className="cursor-pointer" value="FR">+33</option>
                  </select>

                  {(() => {
                    const FlagComponent = FLAGS[paisSelecionado];
                    return FlagComponent ? (
                      <FlagComponent className="w-6 h-4 rounded-sm" title={paisSelecionado} />
                    ) : null;
                  })()}
                </div>

                <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  placeholder={verificarPlaceholders()}
                  onChange={handleChange}
                  required
                  className={`flex-1 min-w-0 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    form.telefone.length > 1 &&
                    (checkNumber(form.telefone)
                      ? "border-green-400 focus:ring-green-400"
                      : "border-red-400 focus:ring-red-400")
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Mensagem <strong className="text-red-600">*</strong></label>
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
                        className="text-gray-400 cursor-pointer hover:text-gray-600"
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
                        className="text-gray-400 cursor-pointer hover:text-gray-600"
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
