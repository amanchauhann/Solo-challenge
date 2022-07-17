var modes = document.getElementById("colorMode");
const button = document.getElementById("getButton");
let codes = document.getElementsByClassName("colorCode");
let displayColor = document.getElementsByClassName("colorDisplay");


// displayColor[0].style.backgroundColor = "#F55A5A";
// document.getElementById("p2").style.color
// let currentSeedColor = document.getElementById("seedColor").value 

// currentSeedColorr = currentSeedColor.slice(1, currentSeedColor.length)


const numberOfColors = 6;

button.addEventListener("click", () => {
    let currentMode = modes.options[modes.selectedIndex].value
    console.log(currentMode)

    // codes[0].textContent = "aman"

    let seedColor = document.getElementById("seedColor").value
    let currentSeedColor = seedColor.slice(1, seedColor.length)
    console.log(currentSeedColor)
    displayColor[0].style.backgroundColor = currentSeedColor;
    codes[0].textContent = seedColor;


    fetch(`https://www.thecolorapi.com/scheme?hex=${currentSeedColor}&mode=${currentMode}&count=${numberOfColors}`)


    .then(res => res.json())
    .then(data => {
            for (let i=1; i<numberOfColors; i++){
                codes[i].textContent = data.colors[i].hex.value;
                displayColor[i].style.backgroundColor = data.colors[i].hex.value
            }
        }
        );

})

// console.log((data).colors[0].hex.value)