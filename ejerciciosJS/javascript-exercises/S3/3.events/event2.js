const input$$ = document.querySelector("input");

function mostrarValor (evento){
    console.log("El valor del input es: " + evento.target.value);
    
}

input$$.addEventListener("focus", mostrarValor);