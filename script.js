const btn = document.querySelector('.resetButton');

const gameArea = document.querySelector('.mainBody');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');               
    square.classList.add('section');    
    square.setAttribute('id', i);   
    gameArea.appendChild(square);    
}

const pixels = document.querySelectorAll('.section');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
    });
  });



btn.addEventListener('click', resetFunction);


function resetFunction() {
    let s = document.getElementById("switcher");
    let switchPos = s.value;    
     while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.lastChild);
    }
    let cols = Math.sqrt(switchPos);
    gameArea.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)"
    for (let i = 0; i < switchPos; i++) {
        const square = document.createElement('div');   
        square.classList.add('section');    
        square.setAttribute('id', i);              
        gameArea.appendChild(square);       
}
const pixels = document.querySelectorAll('.section');

pixels.forEach((pixel) => {
    if (cols === 16) {
        pixel.style.width = "35px";
        pixel.style.height = "35px";
    } else if (cols === 32) {
        pixel.style.width = "17px";
        pixel.style.height = "17px";
    } else if (cols === 48) {
        pixel.style.width = "11px";
        pixel.style.height = "11px";
    }

    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
    });
  });
}

