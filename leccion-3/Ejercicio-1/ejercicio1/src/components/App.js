import React from 'react';
import '../App.css';
import MediaCard from'./MediaCard';

const img = "https://i.pinimg.com/originals/e3/c1/79/e3c1793c7c7f92021d89c7f01ee22a53.jpg"
function App() {
  return (
   <div className="App">
      <MediaCard 
        name="MOI Soaps"
        date="25 de julio de 2020"
        img={img}
        text="MOI soaps ¡Aprendiz de Jabonera en sus primeros pasos!Natural handmade soap apprentice! Made in Spain!!."
        more= "leer más..."
        likes="17"
        heart="fas fa-cat"
      />
    </div>
  );
}
export default App;
