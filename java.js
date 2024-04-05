
let container = document.querySelector("#container");
let stbtn = document.querySelector("#buttonStart");

stbtn.addEventListener("click", () => {
    let gridSize = prompt("what size would you like the Etch-a-Sketch?", "5-100");
    
    let gridDivP = document.querySelectorAll(".gridDivParent");
    let gridDivC = document.querySelectorAll(".gridDivChild")
    if (container.hasChildNodes()) {
    container.removeChild(container.children[0])};
        console.log(container.hasChildNodes());
    makeGrid(gridSize);
})

function makeGrid(gridWidth) {

    

    for (let i = 0; i < gridWidth ; i++) {
        let number1 = Math.random() * 100;
        let number2 = Math.random() * 100;
        let randomnumber = number1 * number2
        randomnumber = document.createElement("div")
        randomnumber.setAttribute("class", "gridDivParent")
        container.append(randomnumber)

        

        for (let i = 0; i < gridWidth ; i++) {
            let number1a = Math.random() * 100;
            let number2a = Math.random() * 100;
            let randomnumber2 = number1a * number2a
            randomnumber2 = document.createElement("div")
            randomnumber2.setAttribute("class", "gridDivChild")
            randomnumber.append(randomnumber2)

            randomnumber2.addEventListener("mouseover", () => {
                randomnumber2.style.backgroundColor = "black";
            })
        }
    }

    
}



// makeGrid(100)