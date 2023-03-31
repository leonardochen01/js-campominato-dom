/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/


/*

PROBLEMI:
-NON RIESCO A RIAVVIARE LA FUNZIONE PER CREARE BOMBE; CLICCANDO SU RESET SI AGGIUNGONO BOMBE
-NON RIESCO A FAR VISUALIZZARE IL NUMERO CORRENTE DI BOX CLICCATI

*/

const container = document.querySelector(".container")


//CICLO CHE GENERA I 100 BOX
for (let i = 1; i <= 100; i++){
  
  const box = document.createElement("div");

  box.classList = 'box';

  container.append(box);
  box.append(i);
  
  function colorChange() {
    box.classList.add("color-change")
    console.log(`Hai cliccato il box n.${i}`)
  };
  
  box.addEventListener("click", colorChange);
}

//BOTTONE START
const playButton = document.querySelector("#start");
const display = document.querySelector("#main");

playButton.addEventListener("click", start);

function start() {
  display.classList.remove("hide");
  console.log(`Hai iniziato il gioco`);

  //function per creare bombe
  function generateBombs() {
    const boxTotali = document.querySelectorAll('.box');
    const bombNumber = [];
    
    while (bombNumber.length < 16) {
      const bombRandom = Math.floor(Math.random() * boxTotali.length) + 1;
      if (!bombNumber.includes(bombRandom)) {
        bombNumber.push(bombRandom);
      }
    }
    
    console.log(`Le bombe si trovano ai box N.${bombNumber}`)

    //aggiungo classe bomb a tutte le bombe generate
    bombNumber.forEach(i => {
      boxTotali[i - 1].classList.add('bomb');
    });

    //seleziono tutti gli elementi con la classe bomb
    const bombPlaced = document.querySelectorAll(".bomb");

    //creo una function per terminare il gioco se si clicca sulla bomba
    function explode(){
      console.log(`Hai cliccato su una BOMBA`);

      //copio funzione reset dentro funzione bomba e ci aggiungo qualche extra
      function lose() {

        const container = document.querySelector(".container");
        container.classList.add("lose");
        document.getElementById("lose-message").innerHTML = "HAI PERSO! HAI PRESO UNA BOMBA!";
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
          box.classList.remove("color-change");
        })
      }
      lose();
    }

    bombPlaced.forEach(bombPlaced => { 
      bombPlaced.addEventListener("click", explode)
    });
    

    
    } //fine ciclo while

  generateBombs();

} //fine function start

//BOTTONE RESTART
const restartButton = document.querySelector("#restart")

function reset() {
  start();
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.classList.remove("color-change");
  })
}

restartButton.addEventListener("click", reset);


