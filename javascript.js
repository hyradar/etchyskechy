


//Create the Grid
for (let i = 0; i < 16 * 16; i ++) {

    let div = document.createElement('div');
    div.className = "blocks";
    
    const mygrid = document.querySelector(".gamegrid");
    mygrid.appendChild(div);
}



const nodeList = document.querySelectorAll(".blocks");
for (let i = 0; i < nodeList.length; i ++) {
    nodeList[i].addEventListener("mouseover" , changeColor);
}

function changeColor(event) {
    event.target.style.backgroundColor = "blue";
}

//common mistake I make: Forgetting the . when referencing classes with quertySeleactor
let output = document.querySelector('.gridrange');
let grid = document.querySelector('.slider').value;
if (output) {
    output.innerHTML = grid + " X " + grid;
}

document.querySelector('.slider').addEventListener('input', updateGrid);

function updateGrid() {
    let output = document.querySelector('.gridrange');
    let grid = document.querySelector('.slider').value;
    output.innerHTML = grid + " X " + grid;
}

function print() {
    console.log('test');
}