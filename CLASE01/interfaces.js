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

let usuario1 = new cliente("Juan", "Perez", 23, 123.45);
console.log(usuario1);
usuario1.saludar();
usuario1.comprar();
