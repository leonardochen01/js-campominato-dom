/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
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

function start() {
  display.classList.remove("hide");
  console.log(`Hai iniziato il gioco`)
}

playButton.addEventListener("click", start);



//BOTTONE RESTART
const restartButton = document.querySelector("#restart")

function reset() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    box.classList.remove("color-change");
  })
}

restartButton.addEventListener("click", reset);


