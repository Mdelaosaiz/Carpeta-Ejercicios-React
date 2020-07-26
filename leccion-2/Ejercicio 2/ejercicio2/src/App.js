import React from 'react';
import './App.css';

// Vamos a maquetar una tarjeta dentro del método render de nuestro componente App. Podéis usar una imagen a vuestra elección en lugar de la que aparece en el diseño, y Font-Awesome para el icono del corazón. De esta forma, aprenderemos a cómo trabajar con cosas que ya conocemos (HTML y CSS) en una aplicación de React.
function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-profile">
          <img className="card-image" src= "https://i.pinimg.com/originals/e3/c1/79/e3c1793c7c7f92021d89c7f01ee22a53.jpg"/>
          <div>
            <p className="card-profile-name">
              Moi
            </p>
            <p className="card-profile-date">
              Sabado 25 de julio de 2020
            </p>
          </div>
        </div>
        <div className="card-text">
          <p>MOI soaps ¡Aprendiz de Jabonera en sus primeros pasos!Natural handmade soap apprentice! Made in Spain!!</p>
        </div>
        <div className="card-more">
          <p>Leer más...</p>
          <p> 17 </p>
          <i className="fas fa-cat fas_own"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
