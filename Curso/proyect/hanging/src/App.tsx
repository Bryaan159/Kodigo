import { useState } from 'react';
import { HangImage } from './Components/HangImage'
import { letters } from './helpers/letters'
import './App.css'
{/*La función map se utiliza cuando tenemos un array y nosotros queremos transformalo en
un nuevo array es como si tenemos una caja de juguetes y los queremos pintar en un nuevo color
hay que guardarlo en una nueva caja*/}

function App() {

  //La creación de la palabra oculta
  const [word] = useState('COMPUTADORAS');
  const [hiddeWord] = useState('_ '.repeat(word.length)); 


  //Código para poder hacer un contador
  const [attempts, seAttempts] = useState(0);

  const checkLetter = (letter: string) => {
    console.log("Letra: ", letter);
    //Posible solución para que el contador no exceda de 9
    // if(attempts >=9){
    //   return;
    // }

    //Solución para que el contador solo aumente sino existe la letra
    
    if(!word.includes(letter)){
      console.log(`La letra ${letter} no existe en la palabra ${word}`);
        //Segundo solución para que el contador no exceda de 9
      seAttempts(Math.min(attempts + 1, 9));
    }else{
      console.log(`La letra ${letter} existe en la palabra ${word}`);
    }
 
    
  }

  return (
    <div className="App">

      {/* Imagenes del juego */}
      <HangImage imageNumber={attempts} />

      {/* Espacio para palabra a descubrir */}
      <h3>{hiddeWord}</h3>

      {/* Contador de los intentos que se ha hecho para lograr solventar el juego */}

      <h3>Intentos: {attempts}</h3>
      {
        letters.map(elements => (
          //
          <button key={elements}
            className="btn"
            //Queremos que la función 
            //se ejecute solo cuando se hace clic en el botón, no cuando se está construyendo el botón.

            /*
            Pero aquí está la parte interesante: no quieres que la fiesta comience
            antes de que alguien toque el botón. No quieres dar el regalo antes de 
            que lleguen tus amigos a la puerta. Entonces, en lugar de dar el regalo 
            de inmediato, dejas una nota que dice: "¡Cuando toques el botón, ven a recibir tu regalo!
            */
            onClick={() => checkLetter(elements)}>{elements}</button>
        ))
      }

    </div>

  )
}

export default App
