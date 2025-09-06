import { NavLink } from "react-router-dom";
import { Pagina } from "../components/pagina";
import ApresentacaoProduto from "../components/ApresentacaoProduto";
import AreasAplicasionais from "../components/AreasAplicasionais";
import Beneficios from "../components/Beneficios";
import Email from "../components/CadastroEmail";
import Footer from "../components/Footer";

export function PaginaPrincipal() {
  return (
    <Pagina>
      <ApresentacaoProduto/>
      <AreasAplicasionais/>
      <Beneficios/>
      <Email/>
      <Footer/>
    </Pagina>
  );
}
