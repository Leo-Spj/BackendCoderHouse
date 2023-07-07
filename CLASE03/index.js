function sumar(a, b) {
    return a + b;
}

const restar = (a, b) => a - b;

//Sincronica
// console.log(sumar(1,2))
// console.log(restar(3,1))


//Funcion basica (setTimeout) para probar el asincronismo
// setTimeout(() => {
//     console.log(sumar(1,1)); // 2
// }
// , 2000)

// setTimeout(() => {
//     console.log(restar(3,2)); // 1
// }
// , 1000)



//CallBacks (ya no se usan, porque generan un callback hell / triangulo de la muerte)
// funcion map recibe un callback
const arrayAnimales = ['perro', 'gato', 'pez', 'tortuga', 'conejo'];
const arrayMod = arrayAnimales.map((animal) => { return `${animal} modificado` });
console.log(arrayMod);



function promesaFun(a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            resolve(a + b);
        } else {
            reject('a es menor que b');
        }
    });
}
 // then y catch son metodos de la promesa
promesaFun(1, 2)
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
});



//Async Await

async function agregarFamiliar(usuarioId, infoFamiliar) {
    try{
        const usuario = await Usuario.findById(usuarioId);
        const familiares = await Familiar.findByLastName({ usuarioId: usuarioId });
        if(familiares.includes(infoFamiliar)){
            return 'Familiar ya existe';
        }
        await Familiar.create(infoFamiliar);
        return 'Familiar agregado';

    } catch(error){

    }
}

