function createGrid(gridSize = 16){
    let container = document.getElementById('container');

    // set number of columns equal to gridSize to create a 1:1 container
    let square = '1fr ';
    container.style.gridTemplateColumns = square.repeat(gridSize);

    // create designated squares within container
    for(let counter=0;counter<gridSize*gridSize;counter++){
        let newDiv = document.createElement('div');
        newDiv.className='box';
        container.appendChild(newDiv);
    }

    // add eventListener to change color of each square on hover
    let boxColor = document.getElementsByClassName('box');
    for(count=0;count<boxColor.length;count++){
    boxColor.item(count).addEventListener('mouseover',function(){
        event.target.style.backgroundColor = randomColor();
    });
    }
}

// produce a random color for the etch-a-sketch
function randomColor(){
    let round = Math.round
    let rand = Math.random
    return 'rgba(' + round(rand()*255) + ',' + round(rand()*255) + ',' 
    + round(rand()*255) + ',' + 1 + ')';
}

// reset grid when resetButton is clicked, take user input for new grid size
document.getElementById('resetButton').addEventListener('click',function(){
    let gridSize = updateGrid();
    


    // clear container, add new squares based on new grid size
    document.getElementById('container').innerHTML = '';
    createGrid(gridSize);
});

// take user input between 1 & 100 and return value
function updateGrid(){
    let newGridSize = prompt('Please enter a grid size:');

    // if input invalid, repeat prompt until input is valid
    if(newGridSize>100 || newGridSize<1 || isNaN(newGridSize)){
        alert('Please enter a grid size between 1-100.')
        newGridSize = updateGrid();
    } else{
        // return valid input after first try
        return newGridSize;
    }

    // return valid input after 1+ invalid inputs
    return newGridSize;
}

// create 16x16 grid on first load
createGrid();








