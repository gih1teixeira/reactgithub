// Importa a biblioteca React para criar componentes.
import React from 'react';

// Define o componente funcional Contato.
function Contato() {
  // Retorna o conteúdo que será exibido na página.
  return (
    // Cria um card utilizando classes do Bootstrap.
    <div className="card shadow-sm p-4 mt-4">
      
      // Título da página de contato.
      <h2 className="card-title text-info">Contato</h2>

      // Parágrafo que exibe o e-mail.
      <p className="card-text">
        {/* Destaca o endereço de e-mail em negrito. */}
        E-mail: <strong>aluno@email.com</strong>
      </p>

    </div>
  );
}

// Exporta o componente para que possa ser utilizado em outros arquivos.
export default Contato;
