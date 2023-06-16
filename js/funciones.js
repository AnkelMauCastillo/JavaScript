/**
 * @function
 * 
 */

//función declarada
function estoEsunaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    
}

//invocar una función
estoEsunaFuncion();
estoEsunaFuncion();
//funcion que devuelve un valor
function unaFuncionQueDevuelveValor() {

    return "retornar cadena de texto";    
}

console.log(unaFuncionQueDevuelveValor());

//una funcion que se le puede pasar parametros
function suma(a, b) {
    return a + b;    
}
console.log(suma(3,4));

//funciones declaradas vs expresadas
declarada();
function declarada(){
    console.log("Esta es una funcion expresada");
}

//funcion anonima
const funcionExpresada = function(){
    console.log("Esta es una funcion expresada, es decir una funcion que se le asginado como valor una varriable");

}

funcionExpresada();
