// Importa a biblioteca React para criar componentes.
import React from 'react';

// Define o componente funcional Inicio.
function Inicio() {
  // Retorna o conteúdo que será exibido na página inicial.
  return (
    // Cria um card utilizando classes do Bootstrap.
    <div className="card shadow-sm p-4 mt-4">

      {/* Título da página inicial. */}
      <h2 className="card-title text-primary">Página Inicial</h2>

      {/* Parágrafo de boas-vindas ao usuário. */}
      <p className="card-text">
        Bem-vindo ao meu portfólio interativo desenvolvido com Vite e React!
      </p>

    </div>
  );
}

// Exporta o componente para que possa ser utilizado em outros arquivos.
export default Inicio;
