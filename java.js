
let container = document.querySelector("#container");
let stbtn = document.querySelector("#buttonStart");



function makeGrid(gridWidth) {
    
    for (let i = 0; i < gridWidth ; i++) {
        let number1 = Math.random() * 100;
        let number2 = Math.random() * 100;
        let randomnumber = number1 * number2
        randomnumber = document.createElement("div")
        container.append(randomnumber)

        

        for (let i = 0; i < gridWidth ; i++) {
            let number1a = Math.random() * 100;
            let number2a = Math.random() * 100;
            let randomnumber2 = number1a * number2a
            randomnumber2 = document.createElement("div")
            randomnumber.append(randomnumber2)

            randomnumber2.addEventListener("mouseover", () => {
                randomnumber2.style.backgroundColor = "black";
            })
        }
    }

    
}



makeGrid(100)