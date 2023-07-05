const obj1 = {
    nombre: "iPad",
    descripcion: "Tablet de Apple",
}
const obj2 = {
    precio: 12,
    stock: 7,
}

const obj = {...obj1,...obj2}
console.log(obj)

console.log("--------------------------------------------------")

//ejemplos de SPREAD con ARRAYS
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr = [...arr1,...arr2]
console.log(arr)

//ejemplos de SPREAD con FUNCIONES
const sumar = (a,b,c) => a+b+c
const numeros = [1,2,3]
console.log(sumar(...numeros))


console.log("--------------------------------------------------")

//ejemplos de REST
const sumar2 = (...numeros) => {
    let sum = 0;

    for (let i of numeros) {
        sum += i;
    }

    console.log(sum)
}
sumar2(1,2,3,4,5,6,7,8,9,10)

//ejemplos de REST con OBJETOS
const {nombre, ...resto} = obj
console.log(nombre)
console.log(resto)

//ejemplos de REST con ARRAYS
const [primero, segundo, ...resto2] = arr
console.log(primero)
console.log(segundo)
console.log(resto2)


console.log("--------------------------------------------------")


//ES11

class TicketManager {
    #precioBaseDeGanancia = 0.15 //propiedad privada (de uso interno de la clse, no de las instancias)

    constructor(){
        this.eventos=[]
    }
    getEventos(){
        return this.eventos
    }
    agregarEvento(nombre, lugar, precio, capacidad=50){

        const id = this.eventos[this.eventos.length-1].id + 1  //obtengo el id del ultimo evento y le sumo 1

        const nuevoEvento = {
            id,
            nombre,
            lugar,
            precio: precio + (precio * this.#precioBaseDeGanancia),
            capacidad,
            fecha : new Date(),
            participantes: []
        }
        this.eventos.push(nuevoEvento)
    }
    agregarUsuario(idEvento,idUsuario){

        const eventoExiste = this.eventos.find(evento => evento.id === idEvento)

        if(!eventoExiste){
             return console.log("El evento no existe")
        } else {
            evento.participantes.push(idUsuario)
        }


    }

}

const manager1 = new TicketManager()
console.log(manager1.eventos)
