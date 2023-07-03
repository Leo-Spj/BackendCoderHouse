// let nombre = "Juan";
// let numero = 123;
// const booleano = true;
// let objeto = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 23
// };
// let arreglo = [1, 2, 3, 4, 5];

// console.log(typeof arreglo);

let nombre = "Juan";
let edad = 23;
let precio = 123.45;
let nombreSeries = ["GOT", "TWD", "BB"];
let peliculas = ['Spiderman', 'Batman', 'Ironman'];

console.log (nombre, edad, precio, nombreSeries, peliculas)

edad++;
nombreSeries.push("Friends");
console.log (nombre, edad, precio, nombreSeries, peliculas)

class Producto {    
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    getNombre(){
        return this.nombre;
    }
}
const producto1 = new Producto("Coca", 12.5);
    console.log(producto1.getNombre());
const producto2 = new Producto("Pepsi", 10.5);
    console.log(producto2.getNombre());

class persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(){
        console.log("Hola, soy " + this.nombre + " " + this.apellido);
    }
}
//herencia de persona en cliente
class cliente extends persona {
    constructor(nombre, apellido, edad, saldo){
        super(nombre, apellido, edad);
        this.saldo = saldo;
    }
    comprar(){
        console.log("Comprando...");
    }

    saludar(){
        console.log("Hola, soy " + this.nombre + " " + this.apellido + " y tengo " + this.saldo + " pesos");
    }
}




let usuario1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
    precio: 123.45,
    nombreSeries: ["GOT", "TWD", "BB"],
    peliculas: ['Spiderman', 'Batman', 'Ironman'],

    saludar: function(){
        console.log("Hola, soy " + this.nombre + " " + this.apellido);
    }
};

usuario1.nombre;
console.log(usuario1.nombre);
usuario1.saludar();

let persona = {
    nombre: "",
    apellido: "",
    edad: 0,
    saludar: function(){
        console.log("Hola, soy " + this.nombre + " " + this.apellido)
    },
    constructor: function(nombre, apellido, edad){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }
};

let persona1 = Object.create(persona);
persona1.nombre = "Leonardo";
persona1.apellido = "Espejo";
persona1.edad = 23;
persona1.saludar();

//usando el constructor:
let persona2 = Object.create(persona);
persona2.constructor("Juan", "Perez", 23);

// cliente hereda de persona
let cliente = Object.create(persona);
cliente.saldo = 0;
cliente.deuda = 0;
cliente.comprar = function(){
    console.log("Comprando...");
}

let cliente1 = Object.create(cliente);
cliente1.nombre = "Valeria";
cliente1.apellido = "Espejo";
cliente1.edad = 23;
cliente1.saldo = 100;
cliente1.deuda = 50;
cliente1.comprar();
cliente1.saludar();

//funcion flecha
let sumar = (a, b) => {
    return a + b;
}
let resultado = sumar(2, 3);
console.log(resultado);

//funcion normal
function sumar2(a, b){
    return a + b;
}
let resultado2 = sumar2(2, 3);
console.log(resultado2);

// do while
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

//for each
let arreglo = [1, 2, 3, 4, 5];
arreglo.forEach(function(elemento, indice){
    console.log(elemento, indice);
});

//for in
let objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23
};
for (let propiedad in objeto){
    console.log(propiedad, objeto[propiedad]);
}


function mostrarLista(arreglo){
    if(Array.isArray(arreglo)){
        if(!arreglo.length){
            console.log("El arreglo está vacío");
        } else {
            arreglo.forEach( 
                function(elemento){
                    console.log(elemento);
                });
                console.log("El arreglo tiene " + arreglo.length + " elementos");
        }
    } else {
        console.log("No es un arreglo");
    }
}

mostrarLista([1, 2, 3, 4, 5]);
mostrarLista("Hola");
mostrarLista([]);
