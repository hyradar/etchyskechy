


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
