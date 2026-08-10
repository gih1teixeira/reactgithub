// Importa a biblioteca React para criar componentes.
import React from 'react';

// Importa os componentes necessários do React Router para criar a navegação entre páginas.
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importa os componentes das páginas do projeto.
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Experiencia from './pages/Experiencia';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

// Define o componente principal da aplicação.
function App() {
  // Retorna toda a estrutura da aplicação.
  return (
    // Envolve a aplicação com o Router para habilitar o sistema de rotas.
    <Router>

      {/* Div principal da aplicação. */}
      <div>

        {/* Barra de navegação utilizando Bootstrap. */}
        <nav className="navbar navbar-expand navbar-dark bg-dark">

          {/* Container para centralizar o conteúdo da navbar. */}
          <div className="container">

            {/* Nome exibido na barra de navegação. */}
            <span className="navbar-brand">Meu Currículo</span>

            {/* Agrupa os links de navegação. */}
            <div className="navbar-nav">

              {/* Link para a página inicial. */}
              <Link className="nav-link" to="/">Início</Link>

              {/* Link para a página Sobre. */}
              <Link className="nav-link" to="/sobre">Sobre</Link>

              {/* Link para a página Experiência. */}
              <Link className="nav-link" to="/experiencia">Experiência</Link>

              {/* Link para a página Projetos. */}
              <Link className="nav-link" to="/projetos">Projetos</Link>

              {/* Link para a página Contato. */}
              <Link className="nav-link" to="/contato">Contato</Link>

            </div>
          </div>
        </nav>

        {/* Container onde será exibido o conteúdo das páginas. */}
        <div className="container mt-3">

          {/* Define as rotas da aplicação. */}
          <Routes>

            {/* Rota da página inicial. */}
            <Route path="/" element={<Inicio />} />

            {/* Rota da página Sobre. */}
            <Route path="/sobre" element={<Sobre />} />

            {/* Rota da página Experiência. */}
            <Route path="/experiencia" element={<Experiencia />} />

            {/* Rota da página Projetos. */}
            <Route path="/projetos" element={<Projetos />} />

            {/* Rota da página Contato. */}
            <Route path="/contato" element={<Contato />} />

          </Routes>
        </div>

      </div>
    </Router>
  );
}

// Exporta o componente App para ser utilizado no arquivo main.jsx.
export default App;
