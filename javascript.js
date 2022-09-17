
updateGrid();

//Adds Event Listener to Slider Element
document.querySelector('.slider').addEventListener('input', updateGrid);

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

function updateBlock(grid) {
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

function changeColor(event) {
    event.target.style.backgroundColor = "blue";
}

function addMouseOver() {
    const nodeList = document.querySelectorAll(".blocks");
    for (let i = 0; i < nodeList.length; i ++) {
        nodeList[i].addEventListener("mouseover" , changeColor);
    }
}