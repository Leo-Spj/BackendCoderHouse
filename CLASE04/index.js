//set interval
// setInterval(() => {
//     console.log('Probando setInterval');
// }, 1000);

//persistencia de datos en archivos
// File System (fs)
//fs en NodeJs
            const fs = require('fs');


//para leer un archivo
//usar readFile cuando: el proceso es asincronico
//usar readFileSync cuando: el proceso es sincronico
//    fs.readFile: recibe 3 parametros (path, codificacion, callback) ------------
//    fs.readFileSync: recibe 2 parametros (path, codificacion) ------------

//para escribir un archivo
//usar writeFile cuando: el proceso es asincronico
//usar writeFileSync cuando: el proceso es sincronico
//    fs.writeFile: recibe 3 parametros (path, contenido, callback) ------------
//    fs.writeFileSync: recibe 2 parametros (path, contenido) ------------

//para agregar contenido a un archivo
//usar appendFile cuando: el proceso es asincronico
//usar appendFileSync cuando: el proceso es sincronico
//    fs.appendFile: recibe 3 parametros (path, contenido, callback) ------------
//    fs.appendFileSync: recibe 2 parametros (path, contenido) ------------

//para borrar un archivo
//usar unlink cuando: el proceso es asincronico
//usar unlinkSync cuando: el proceso es sincronico
//    fs.unlink: recibe 2 parametros (path, callback) ------------
//    fs.unlinkSync: recibe 1 parametro (path) ------------

//para corroborar si existe un archivo
// NO HAY version asincronica
//usar existsSync cuando: el proceso es sincronico
//    fs.existsSync: recibe 1 parametro (path) ------------


//------------------
// //si existe un archivo
// const existeArchivo = fs.existsSync('archivo.txt');
// console.log(existeArchivo);

// // escribir/cre un archivo
// fs.writeFileSync('archivo.txt', 'Primea linea archivo')

// // leer un archivo
// const infoArchivo = fs.readFileSync('archivo.txt', 'utf-8');
// console.log(infoArchivo);

// //si existe un archivo
// const existeArchivo2 = fs.existsSync('archivo.txt');
// console.log(existeArchivo2);

// //eliminar un archivo
// fs.unlinkSync('archivo.txt');
// console.log('archivo eliminado');
//------------------


// // --------------------------
// //Asincrona
// fs.writeFile('archivoAsync.json', '{"nombre": "Juan"}', (error) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo creado');
//     }
// });

// fs.readFile('archivoAsync.json', 'utf-8', (error, info) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(info);
//     }
// });

// fs.unlink('archivoAsync.json', (error) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo eliminado');
//     }
// });
// // --------------------------


// // --------------------------
const productos = [
    {
        nombre: 'iPhone 12',
        precio: 1000,
        id: 1
    },
    {
        nombre: 'iPhone 12 Pro',
        precio: 1500,
        id: 2
    },
]
// // el objeto se convierte en un string, un json, mediante JSON.stringify

// fs.writeFile('productos.json', JSON.stringify(productos), (error) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo creado');
//     }
// });

// fs.readFile('productos.json', 'utf-8', (error, info) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(JSON.parse(info));
//     }
// });
// // --------------------------


// // --------------------------
// // con promesas 
// fs.promises.writeFile('productos.json', JSON.stringify(productos))
// .then(() => console.log('Archivo creado'))
// .catch((error)=> console.log(error));

// fs.promises.readFile('productos.json', 'utf-8')
// .then((info) => console.log(JSON.parse(info)))
// .catch((error)=> console.log(error));
// // --------------------------


// --------------------------
//Async await

class ManagerUsuarios{
    constructor(path){
        this.path = path;
    }

    async consultarUsuarios(){
        try{
            if(fs.existsSync(this.path)){
                const infoArchivo = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(infoArchivo);
            } else {
                return [];
            }
        } catch(error){
            return error;
        }
    }

    async crearUsuario(objUsuario){
        try{
            const usuarioPrev = await this.consultarUsuarios();

            let id;
            if(productos.length === 0){
                id = 1;
            } else {
                id = productos[productos.length - 1].id + 1;
            }

            usuarioPrev.push({...objUsuario, id});
            await fs.promises.writeFile(this.path, JSON.stringify(usuarioPrev));

        } catch (error){
            return error;
        }
    }
}

async function prueba(){
    const managerUsuarios = new ManagerUsuarios('usuarios.json');
    const usuarios = await managerUsuarios.consultarUsuarios();
    console.log(usuarios);
}
prueba();

// ---
const usuario1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    curso:'Backend'
}


async function prueba0(){
    const manager = new ManagerUsuarios('usuarios1.json');
    await manager.crearUsuario(usuario1);
    const usuarios = await manager.consultarUsuarios();
    console.log(usuarios);
}
prueba0();

// agregar / sobreescribir / eliminar / consultar

