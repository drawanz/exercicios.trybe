function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  // exercício 1

  for ( let i =0; i<dezDaysList.length; i +=1){
      let dias = document.createElement("li");
      dias.innerText = dezDaysList[i];
      let paiDias = document.getElementById("days");
      dias.className = "day";
      paiDias.appendChild(dias);
  }   

  let natal = document.getElementById("days").getElementsByTagName('li')[25];
  natal.className = "holiday";

  let posNatal = document.getElementById("days").getElementsByTagName('li')[26];
  posNatal.className = "holiday";

  let virada = document.getElementById("days").getElementsByTagName('li')[32];
  virada.className = "holiday";

  let friday1 = document.getElementById("days").getElementsByTagName('li')[5];
  friday1.className = "friday";

  let friday2 = document.getElementById("days").getElementsByTagName('li')[12];
  friday2.className = "friday";

  let friday3 = document.getElementById("days").getElementsByTagName('li')[19];
  friday3.className = "friday";

  let friday4 = document.getElementById("days").getElementsByTagName('li')[26];
  friday4.className = "friday";

// exercício 2
let button = document.createElement("button");
button.innerHTML = "Feriados";
let buttonContainer = document.getElementsByClassName("buttons-container");
buttonContainer.appendChild(button);





  
