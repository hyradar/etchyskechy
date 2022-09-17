
updateGrid();
// defaultGrid();
//Create default grid
// function defaultGrid() {

//     for (let i = 0; i < 25 * 25; i ++) {
        
//         const mygrid = document.querySelector(".gamegrid");
//         let div = document.createElement('div');
//         div.className = "blocks";
//         div.style.height = "20px";
//         div.style.width = "20px";
//         mygrid.appendChild(div);
    
//     }

//     addMouseOver();
// }






//common mistake I make: Forgetting the . when referencing classes with quertySeleactor
let output1 = document.querySelector('.gridrange');
let grid1 = document.querySelector('.slider').value;
if (output1) {
    output1.innerHTML = grid1 + " X " + grid1;
}

document.querySelector('.slider').addEventListener('input', updateGrid);


// console.log(document.querySelector('.slider').value);

function updateGrid(grid1) {
    let output = document.querySelector('.gridrange');
    let grid = document.querySelector('.slider').value;
    output.innerHTML = grid + " X " + grid;
    removeGrid();
    updateBlock(grid);
}

function removeGrid() {
    console.log("for loop running");
    const element = document.querySelector('.gamegrid');
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

function updateBlock(grid) {

    console.log(grid);
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