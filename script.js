const btn = document.querySelector('.resetButton');

const gameArea = document.querySelector('.mainBody');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');               
    square.classList.add('section');    
    square.setAttribute('id', i);                                
    gameArea.appendChild(square);    
}

btn.addEventListener('click', resetFunction);


function resetFunction() {
    for (let i = 0; i < 256; i++) {
        const blocks = document.querySelector('.section');
        gameArea.removeChild(blocks)
    }
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');               
        square.classList.add('section');    
        square.setAttribute('id', i);                                  
        gameArea.appendChild(square);  
}
}
