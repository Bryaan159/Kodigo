import { useEffect, useState } from 'react';
import { HangImage } from './Components/HangImage'
import { letters } from './helpers/letters'
import './App.css'
{/*La función map se utiliza cuando tenemos un array y nosotros queremos transformalo en
un nuevo array es como si tenemos una caja de juguetes y los queremos pintar en un nuevo color
hay que guardarlo en una nueva caja*/}

function App() {

  //La creación de la palabra oculta
  const [word] = useState('COMPUTADORAS');
  const [hiddeWord, setHiddeWord] = useState('_ '.repeat(word.length));
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Código para poder hacer un contador
  const [attempts, seAttempts] = useState(6);

  //Determinar si el jugador si perdio
  //Explicacion de esste código
  useEffect(() => {
    if(attempts >= 9){
      setLose(true);
    }
  }, [attempts]);


  //Determinar si el jugador si gano
  useEffect(() => {
    const currentHiddenWord = hiddeWord.split(' ').join('');
    if(word === currentHiddenWord){
      setWon(true);
      alert('Ganaste');
    } 
  },[hiddeWord]);


  const checkLetter = (letter: string) => {
    console.log("Estado de lose: ", lose);
    if(lose ) return;
    console.log("Letra: ", letter);
    //Posible solución para que el contador no exceda de 9
    // if(attempts >=9){
    //   return;
    // }

    //Solución para que el contador solo aumente sino existe la letra

    if (!word.includes(letter)) {
      console.log(`La letra ${letter} no existe en la palabra ${word}`);
      //Segundo solución para que el contador no exceda de 9
      seAttempts(Math.min(attempts + 1, 9));
      return;
    }

    //Recorre la palbra y muestre dicha letra
    //Explicacion de este código
    const hiddenWordArray = hiddeWord.split(' ');
    console.log(hiddenWordArray);
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddeWord(hiddenWordArray.join(' '));

    //mostar mensaje de gano o perdio


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
        (lose) ? <h2>Perdiste la palabra era: {word}</h2>: ''
      }
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
      {/* <h3>Estado: {lose}</h3> */}

    </div>

  )
}

export default App
