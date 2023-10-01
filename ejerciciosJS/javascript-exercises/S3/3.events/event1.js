const newButton = document.createElement("button");
newButton.textContent = "Soy un botón";

newButton.setAttribute("id", "btnToClick");

function mostrarEvento(){
    console.log("Hago click");
}

newButton.addEventListener("click", mostrarEvento);

document.body.appendChild(newButton);