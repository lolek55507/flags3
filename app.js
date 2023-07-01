const flags = document.querySelectorAll("#flagueName");
// const flagsPl = [
 //   "Unia Europejska", "Albania", "Andorra", "Austria", "bialorus", "Belgia", "Bosnia", "Bulgaria", "Chorwacja", "Cypr", "Czechy", "Dania", "Estonia", "Wyspy Owcze", "Finlandia", 
// "Francja", "Niemcy", "Gibraltar", "Grecja", "Grenlandia", "Wegry", "Islandia", "Irlandia", "Wlochy", "Lotwa", "Lichtenstain", "Litwa", "Luxemburg", "Macedonia", "Malta", "Moldawia",
  //  "Monaco", "Czarnogora", "Holandia", "Norwegia", "Polska", "Serbia", "Slowacja", "Slowenia", "Hiszpania", "Szwecja", "Szwajcaria", "Turcja", "Ukraina", "Wielka Brytania", "Watykan",
// ];
let answers = document.getElementById("answers");
const wrongAnswerSound = document.getElementById("audioW");
const correctAnswerSound = document.getElementById("audioC");

    
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { 
      checkForCorrect();
    }
  });
    

  function checkForCorrect() {
    let mat = false; 
    for (let m = flags.length - 1; m >= 0; m--) {
      if (flags[m].innerHTML.toLowerCase() === answers.value.toLowerCase()) {
        flags[m].classList.remove("invisible");
        correctAnswerSound.play();
        mat = true; 
        break; 
      }
    }
  
    if (!mat) {
      wrongAnswerSound.play();
    }
  }

function startPlaying() {
    console.log(flags);
    for (let i = flags.length - 1; i >= 0; i--) 
    flags[i].classList.add("invisible");
}

function stopPlaying() {
    for (let m = flags.length - 1; m >= 0; m--) {
        
            flags[m].classList.remove("invisible");
        
        
    } 
}