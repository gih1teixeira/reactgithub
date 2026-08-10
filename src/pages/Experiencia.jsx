// Importa a biblioteca React para criar componentes.
import React from 'react';

// Define o componente funcional Experiencia.
function Experiencia() {
  // Retorna o conteúdo que será exibido na página.
  return (
    // Div principal com margem superior.
    <div className="mt-4">

      {/* Título da página de experiência profissional. */}
      <h2 className="text-warning mb-3">Experiência Profissional</h2>

      {/* Primeiro card com informações da experiência profissional. */}
      <div className="card shadow-sm mb-3">

        {/* Corpo do card. */}
        <div className="card-body">

          {/* Título da experiência. */}
          <h5 className="card-title">Desenvolvedor Web (Estágio)</h5>

          {/* Descrição das atividades realizadas. */}
          <p className="card-text">
            Desenvolvimento de páginas utilizando HTML, CSS, JavaScript e React.
          </p>

        </div>
      </div>

      {/* Segundo card com informações sobre projetos acadêmicos. */}
      <div className="card shadow-sm">

        {/* Corpo do card. */}
        <div className="card-body">

          {/* Título da seção de projetos. */}
          <h5 className="card-title">Projetos Acadêmicos</h5>

          {/* Descrição dos projetos desenvolvidos durante o curso. */}
          <p className="card-text">
            Criação de aplicações utilizando React, Bootstrap e Vite durante o curso.
          </p>

        </div>
      </div>

    </div>
  );
}

// Exporta o componente para que possa ser utilizado em outros arquivos.
export default Experiencia;
