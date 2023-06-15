let nombre = "Angel";
let apellidos = "Castillo";
let saludo = new String("Hola Mundo");
let lorem = "              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, corporis a illum delectus molestias optio beatae rerum facilis reprehenderit dolorem perspiciatis cum laborum distinctio ipsum nobis, voluptatibus magni dolores! Sed.";

console.log(nombre, apellidos, saludo);
console.log(nombre.toLowerCase(), apellidos.toLocaleUpperCase(), saludo.length);
console.log(lorem.includes("cum"));
console.log(lorem.includes("angel"));
console.log(lorem.trim());
console.log(lorem.split(" "));
/*
Template String
*/
let saludo2 = "Hola mi nombre es: " + nombre + " " + apellidos ;
console.log(saludo2);
//para agregar las templates strings es con alt + cerrar corchete `aqui ejemplo`

let saludo3 = `Hola mi nombre es: ${nombre} ${apellidos}`;
console.log(saludo3);


/*
Números de Js
*/

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.34";
console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(a));
console.log(typeof c, typeof d);
console.log(parseFloat(d) + a);
console.log(parseInt(d) + a);

//boolean values
