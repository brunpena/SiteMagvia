import { NavLink } from "react-router-dom";
import { Pagina } from "../components/pagina";
import ApresentacaoProduto from "../components/ApresentacaoProduto";

export function PaginaPrincipal() {
  return (
    <Pagina>
      <ApresentacaoProduto/>
    </Pagina>
  );
}
