// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Pagina } from "../../components/Layout/Pagina";

export function Page404() {
  return (
    <Pagina>
      <div className="min-h-[75vh] flex items-center justify-center">
        <div className="max-w-xl text-center bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-6">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link
            to="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </Pagina>
  );
}
