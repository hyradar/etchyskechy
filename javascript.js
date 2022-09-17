


updateGrid();
let defaultBrush = "blueBrush";
let globalBrush = defaultBrush;

globalBrush = updateGlobalBrush(globalBrush);


globalBrush = updateGlobalBrush("rainwbowBrush");



//Adds Event Listeners
document.querySelector('.slider').addEventListener('input', updateGrid);


//Grid Functions

function updateGrid() {
    let output = document.querySelector('.gridrange');
    let grid = document.querySelector('.slider').value;
    output.innerHTML = grid + " X " + grid;
    removeGrid();
    updateBlock(grid);
}

function removeGrid() {
    const element = document.querySelector('.gamegrid');
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

function updateBlock(grid, globalBrush) {
    //Create Grid
    for (let i = 0; i < grid * grid; i ++) {
        
        let div = document.createElement('div');
        div.className = "blocks";
        const mygrid = document.querySelector(".gamegrid");
        mygrid.appendChild(div);

        mygrid.style.gridTemplateColumns = "repeat(" + grid + ", 1fr)";
        mygrid.style.gridTemplateRows = "repeat(" + grid + ", 1fr)";
        div.style.height = "calc(" + 500 + " / " + grid + ")";
        div.style.width = "calc(" + 500 + " / " + grid + ")";
    }
    addMouseOver();
}

// Brush + Mouse Functions

function blueBrush(event) {
    event.target.style.backgroundColor = "blue";
}

function rainwbowBrush(event) {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    event.target.style.backgroundColor = color;
}

function addMouseOver() {
    const nodeList = document.querySelectorAll(".blocks");
    for (let i = 0; i < nodeList.length; i ++) {
        nodeList[i].addEventListener("mouseover" , blueBrush);
    }
}


function updateGlobalBrush(brush) {
    
    const nodeList = document.querySelectorAll(".blocks");
    
    if (brush === "blueBrush") {
        //Remove Event Listeners
        for (let i = 0; i < nodeList.length; i ++) {
            nodeList[i].removeEventListener("mouseover" , rainwbowBrush);
        }
        //Add Event Listeners
        for (let i = 0; i < nodeList.length; i ++) {
            nodeList[i].addEventListener("mouseover" , blueBrush);
        }
        return brush = "blueBrush";
    }
    
    else if (brush === "rainbowBrush") {
        //Remove Event Listeners
        for (let i = 0; i < nodeList.length; i ++) {
            nodeList[i].removeEventListener("mouseover" , blueBrush);
        }
        //Add Event Listeners
        for (let i = 0; i < nodeList.length; i ++) {
            nodeList[i].addEventListener("mouseover" , rainwbowBrush);
        }
        return brush = "rainbowBrush";
    }
    return brush;
}