let gridSize = 25;


let container = document.getElementById('container');

// set number of columns equal to gridSize to create a square
let square = '1fr ';
container.style.gridTemplateColumns = square.repeat(gridSize);

// create designated grid within container
for(let counter=0;counter<gridSize*gridSize;counter++){
    let newDiv = document.createElement('div');
    newDiv.className='box';
    container.appendChild(newDiv);
}

let boxColor = document.getElementsByClassName('box');

// add eventListener to change color of each square on hover
for(count=0;count<boxColor.length;count++){
    boxColor.item(count).addEventListener('mouseover',function(e){
        event.target.style.backgroundColor = randomColor();
    });
}

// produce a random color for the etch-a-sketch
function randomColor(){
    let round = Math.round
    let rand = Math.random
    return 'rgba(' + round(rand()*255) + ',' + round(rand()*255) + ',' 
    + round(rand()*255) + ',' + 1 + ')';
}





