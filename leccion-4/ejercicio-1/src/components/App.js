//Crea 2 componentes HalfPage con algo de contenido HTML (en JSX) para ver cómo se posiciona en una mitad y la otra.

import React from 'react';
import HalfPage from './HalfPage';
import '../App.css';


function App() {
  return (
    <div className="App">
      <HalfPage>
        <h1>Hola Don Pepito</h1>        
      </HalfPage>
      <HalfPage>
        <h1>Hola Don José</h1>
      </HalfPage>
    </div>
  );
}

export default App;