var modes = document.getElementById("colorMode");
const button = document.getElementById("getButton");
let codes = document.getElementsByClassName("colorCode");
let displayColor = document.getElementsByClassName("colorDisplay");


const numberOfColors = 6;


getColorData()

button.addEventListener("click", () => {
    getColorData()
})

function getColorData(){
    let currentMode = modes.options[modes.selectedIndex].value
    let seedColor = document.getElementById("seedColor").value
    let currentSeedColor = seedColor.slice(1, seedColor.length)

    fetch(`https://www.thecolorapi.com/scheme?hex=${currentSeedColor}&mode=${currentMode}&count=${numberOfColors}`)

    .then(res => res.json())
    .then(data => {
            for (let i=0; i<numberOfColors; i++){
                codes[i].textContent = data.colors[i].hex.value;
                displayColor[i].style.backgroundColor = codes[i].textContent
            }
        }
        );
}