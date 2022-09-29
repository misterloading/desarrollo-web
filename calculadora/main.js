let screen = document.querySelector("#screen");

document.querySelector("#limpiar").addEventListener("click", function(){
    screen.value = ""
})

document.querySelector("#eliminar").addEventListener("click", function(){
    screen.value = screen.value.substring(0, (screen.value.length - 1));
})

function addToScreen(value){
    const  operation = ["*","+","-","/"];
    screen.value += value;
    
    if (operation.includes(value)){
        let valorAnterior = screen.value.length - 2;

        if (operation.includes(screen.value[valorAnterior])){
            screen.value = screen.value.substring(0, (screen.value.length -2));
            screen.value = screen.value + value;
        }
    }
    switch(screen.value[0]){
        case "*":
            screen.value="";
        case "/":
            screen.value="";
        case ".":
            screen.value="";
    }
}

function resultado(){
    screen.value = eval(screen.value);
}


