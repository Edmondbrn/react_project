import React from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleClick = () => {
    alert('Bouton cliqué !');
  };

  return (
    <div className="App">
      <Header />
      <main className="container mt-4">
        <h1>Bienvenue dans mon application React</h1>
        <div className="row mt-4">
          <div className="col-md-4">
            <Card 
              title="Ma première carte" 
              text="Voici un exemple de contenu pour cette carte."
              buttonText="En savoir plus"
              onClick={handleClick}
            />
          </div>
          <div className="col-md-4">
            <Card 
              title="Ma deuxième carte" 
              text="Un autre exemple avec un contenu différent."
              buttonText="Cliquez ici"
              onClick={handleClick}
            />
          </div>
          <div className="col-md-4">
            <Card 
              title="Ma troisième carte" 
              text="Cette carte n'a pas de bouton."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;