const input$$ = document.querySelector("input");

function ejecutarConsoleLog(input){
console.log("Este input tiene el valor de: " + input.target.value);

};

input$$.addEventListener("input", ejecutarConsoleLog);