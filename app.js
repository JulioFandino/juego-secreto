let numero_Secreto = 0
let intentos = 0
let lista_Numeros_Sorteados = [];
let numero_Maximo = 9;

function asignar_Texto_Elemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
    
function verificar_Intento(){

     let numero_De_Usuario = parseInt(document.getElementById("numero_Usuario").value);

     if(numero_De_Usuario === numero_Secreto){
        asignar_Texto_Elemento("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
     } else {
        if (numero_De_Usuario > numero_Secreto){
            asignar_Texto_Elemento("p","El número secreto es menor");
        } else {
            asignar_Texto_Elemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiar_Caja();

     }
     return;
}

function limpiar_Caja(){
    document.querySelector("#numero_Usuario").value = "";
}

function generar_Numero_Secreto(){
    let numero_Generado = Math.floor(Math.random()*numero_Maximo)+1;
    // si el numero generado esta incluido en la lista
    console.log(numero_Generado)
    console.log(lista_Numeros_Sorteados)
    if(lista_Numeros_Sorteados.length == numero_Maximo){
        asignar_Texto_Elemento('p','Ya se sortearon todos los numeros');
    } else {

        if (lista_Numeros_Sorteados.includes(numero_Generado)){
            return generar_Numero_Secreto();
        } else {
            lista_Numeros_Sorteados.push(numero_Generado);
            return numero_Generado;
        }
    }
}

function funciones_Iniciales(){
    asignar_Texto_Elemento("h1","Juego del numero secreto");
    asignar_Texto_Elemento("p",`indica un numero del 1 al ${numero_Maximo}`);
    numero_Secreto = generar_Numero_Secreto();    
    intentos = 1;


}

function reiniciar_Juego(){
    //limpiar caja
    limpiar_Caja();
    //indicar mensaje de inicio
    funciones_Iniciales();
    //generar numero aleatorio
    //volver a deshabilitar el boton
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    //reiniciar numero de intentos
}

funciones_Iniciales();

