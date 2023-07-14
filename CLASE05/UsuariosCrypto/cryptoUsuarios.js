
// Usamos el modulo crypto para encriptar y desencriptar

const fs = require('fs');
const crypto = require('crypto');

class UsarManager{
    constructor(path){
        this.path = path;
    }

    async findUser(){
        try{
            if(fs.existsSync(this.path)){
                const data = fs.readFileSync(this.path, 'utf-8');
                const usuarios = JSON.parse(data);
                return usuarios;
            } else {
                return [];
            }

        } catch(error){
            console.log(error);
        }

    }

    async creatUser(usuario){
        try{
            const usuarios = await this.findUser();

            let id;
            if(usuarios.length === 0){
                id = 1;
            } else {
                id = usuarios[usuarios.length - 1].id + 1;
            }

            const nuevoUsuario = {...usuario, id};

            // Encriptamos la contraseña de nuevoUsuario.password    ----- OJO: NO USAR ESTO EN PRODUCCION, USAR BCRYPT O ALGO MAS SEGURO
            const hashPassword = crypto.createHash('sha256').update(nuevoUsuario.password).digest('hex');
            nuevoUsuario.password = hashPassword;

            //console.log(hashPassword);

            usuarios.push(nuevoUsuario);
            const jsonUsuarios = JSON.stringify(usuarios);

            await fs.promises.writeFile(this.path, jsonUsuarios);

            return nuevoUsuario;

        } catch(error){
            console.log(error);
        }
    }
}

// async function prueba(){
const prueba = async () =>{
    const manager = new UsarManager('CLASE05/UsuariosCrypto/usuarios.json');
    await manager.creatUser({name: 'Vale', password: '12345'});

    console.log(await manager.findUser());
}

prueba();