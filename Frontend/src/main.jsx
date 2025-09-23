import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PaginaPrincipal } from './pages/PaginaPrincipal';
import './index.css'
import { createRoutesFromElements, RouterProvider, Route, createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/_Layout';
import { Informacoes } from './pages/Informacoes';
import { SobreNos } from './pages/SobreNos';
import { Contato } from './pages/Contato';
import { Produtos } from './pages/Produtos';
import { Acessorios } from './pages/Acessorios';
import { SaibaMais } from './pages/SaibaMais';
import { SobreMaximus } from './pages/SobreProdutos/SobreMaximus';
import { SobreMaximusClinic } from './pages/SobreProdutos/SobreMaximusClinic';
import { SobreTDCS } from './pages/SobreProdutos/SobreTDCS';
import { SobreBobinaCircular } from './pages/SobreProdutos/SobreAcessorios/SobreBobinaCircular';
import { SobreBobina8 } from './pages/SobreProdutos/SobreAcessorios/SobreBobina8';
import { SobreMagBee } from './pages/SobreProdutos/SobreAcessorios/SobreMagBee';
import { Page404 } from './pages/page404';


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<PaginaPrincipal />} />
      <Route path="inicio" element={<PaginaPrincipal />} />
      <Route path="informacoes" element={<Informacoes />} />
      <Route path="sobrenos" element={<SobreNos />} />
      <Route path="contato" element={<Contato />} />
      <Route path="produtos" element={<Produtos />} />
      <Route path="acessorios" element={<Acessorios />} />
      <Route path="saibamais" element={<SaibaMais />} />
      <Route path="sobreprodutos/maximus" element={<SobreMaximus />} />
      <Route path="sobreprodutos/maximus-clinic" element={<SobreMaximusClinic />} />
      <Route path="sobreprodutos/tdcs" element={<SobreTDCS />} />
      <Route path="sobreprodutos/sobre-acessorios/bobina-circular" element={<SobreBobinaCircular />} />
      <Route path="sobreprodutos/sobre-acessorios/bobina-8" element={<SobreBobina8 />} />
      <Route path="sobreprodutos/sobre-acessorios/magbee" element={<SobreMagBee />} />
      <Route path="*" element={<Page404 />} />
      

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);

