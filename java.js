
let container = document.querySelector("#container");
let stbtn = document.querySelector("#buttonStart");

console.log(container.hasChildNodes())

stbtn.addEventListener("click", () => {
    let gridWidth = prompt("what size would you like the Etch-a-Sketch?", "5-100");
 if (gridWidth < 101){
    if (container.hasChildNodes()){
    deletePrev();}

    makeGrid(gridWidth);} else {
        alert('That number is too large try a smaller one.')
    }
})

function deletePrev() {
    
    var gridDivParent = document.getElementById("container").getElementsByClassName("gridDivParent");
    let gridDivParentLength = gridDivParent.length - 1
    for (let i = gridDivParentLength; i >= 0; i--) {
        let parentDelCol = gridDivParent[i]
        let gridDivChild = parentDelCol.getElementsByClassName("gridDivChild")
        let gridDivChildLength = gridDivChild.length -1
        
        for (let i = gridDivChildLength; i >= 0; i--){
        let gridDelRow = gridDivChild[i]
        parentDelCol.removeChild(gridDelRow)
    }}}
    

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

            randomnumber2.addEventListener("mouseover", function colorChange() {
                let colorNumber1 =Math.floor(Math.random() * 255);
                // console.log(colorNumber1)
                let colorNumber2 = Math.floor(Math.random() * 255);
                let colorNumber3 = Math.floor(Math.random() * 255);
                // let colorRandomCombo =(colorNumber1,colorNumber2,colorNumber3) ;
                randomnumber2.style.backgroundColor = "rgba(" + colorNumber1 + "," + colorNumber2 + "," + colorNumber3 + ", 1)"
                randomnumber2.removeEventListener("mouseover", colorChange)            

            })
            
        
            
        }
    }

    
}



