// Importa a biblioteca React para criar componentes.
import React from 'react';

// Define o componente funcional Projetos.
function Projetos() {
  // Retorna o conteúdo que será exibido na página.
  return (
    // Cria um card utilizando classes do Bootstrap.
    <div className="card shadow-sm p-4 mt-4">

      {/* Título da página de projetos. */}
      <h2 className="card-title text-danger">Projetos do Curso</h2>

      {/* Lista dos projetos desenvolvidos durante o curso. */}
      <ul className="list-group">

        {/* Primeiro item da lista com link para o GitHub. */}
        <li className="list-group-item">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            Projeto 1 - GitHub
          </a>
        </li>

        {/* Segundo item da lista com link para o site do Vite. */}
        <li className="list-group-item">
          <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
            Projeto 2 - Vite
          </a>
        </li>

        {/* Terceiro item da lista com link para o site do React. */}
        <li className="list-group-item">
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            Projeto 3 - React
          </a>
        </li>

      </ul>

    </div>
  );
}

// Exporta o componente para que possa ser utilizado em outros arquivos.
export default Projetos;
