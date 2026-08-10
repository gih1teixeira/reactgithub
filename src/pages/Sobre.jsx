// Importa a biblioteca React para criar componentes.
import React from 'react';

// Define o componente funcional Sobre.
function Sobre() {
  // Retorna o conteúdo que será exibido na página.
  return (
    // Cria um card utilizando classes do Bootstrap.
    <div className="card shadow-sm p-4 mt-4">

      {/* Título da página sobre formação e apresentação pessoal. */}
      <h2 className="card-title text-success">Sobre Mim & Formação</h2>

      {/* Parágrafo com uma breve descrição sobre o estudante. */}
      <p className="card-text">
        Estudante de desenvolvimento web focado em tecnologias frontend.
      </p>

    </div>
  );
}

// Exporta o componente para que possa ser utilizado em outros arquivos.
export default Sobre;
