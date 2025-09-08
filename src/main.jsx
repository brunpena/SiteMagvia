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


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<PaginaPrincipal />} />
      <Route path="inicio" element={<PaginaPrincipal />} />
      <Route path="informacoes" element={<Informacoes />} />
      <Route path="sobrenos" element={<SobreNos />} />
      <Route path="contato" element={<Contato />} />
      <Route path="produtos" element={<Produtos />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);