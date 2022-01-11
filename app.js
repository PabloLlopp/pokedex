let count = 1;

function render(){
    let container = document.getElementById('pokemon');

    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let previous = document.getElementById('previous');
let next = document.getElementById('next');

previous.onclick = function(){
    if (count > 1){
    count--
    render();
    }
}

next.onclick = function(){
    if (count < 650){
        count++
        render();
    }
}



let send = document.getElementById('send');

send.onclick = function number(x){

    let container = document.getElementById('pokemon');

    if (i.value > 0 && i.value < 650){

    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${i.value}.svg">`;

    count = i.value;
    }
}



let enter = document.getElementById('number');

enter.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      number(i.value);
    }
  });

  let i = document.querySelector('input');

  function number(x){
    
    let container = document.getElementById('pokemon');
    
    if (i.value > 0 && i.value < 650){

        container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${i.value}.svg">`;
    
        count = i.value;
        }
  }

render();