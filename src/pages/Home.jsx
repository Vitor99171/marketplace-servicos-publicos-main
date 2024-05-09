import React from "react";
import Button from "../components/Button"; // Importa o componente Button

const Home = () => {
  return (
    <div className="container mx-auto"> {/* Container principal */}
      <h1>Marketplace de Serviços Públicos</h1> {/* Título */}
      <p>Encontre e utilize serviços públicos com facilidade e rapidez.</p> {/* Descrição */}
      <Button
        label="Buscar Serviços" // Texto do botão
        onClick={() => {
          /* Redirecionar para a página de serviços */
          // Aqui estaria a lógica para redirecionar o usuário para a página de serviços,
          // por exemplo, usando um router como React Router.
        }}
      />
    </div>
  );
};

export default Home;