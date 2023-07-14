
## Modulos nativos en NodeJs

* fs: file system - manejo de archivos como leer, escribir, etc
* crypto: criptografia - encriptar, desencriptar, etc (mejor usar bcrypt o libs mas seguras)
* http: protocolo de transferencia de hipertexto - crear servidores, consumir apis, etc. (Express simplifica el uso de este modulo)
* path: manejo de rutas de archivos - crear rutas, concatenar rutas, etc
* os: informacion del sistema operativo - saber que sistema operativo tenemos.
* ...




## Modulos de terceros
### Via NPM

Se inicializa con el comando `npm init -y` y se crea un archivo `package.json` con la informacion del proyecto (el -y es para que no pregunte nada y lo cree automaticamente, es opcional)

Para instalar una libreria se usa el comando `npm install <nombre de la libreria>` y se crea una carpeta `node_modules` con la libreria instalada y se agrega una linea en el archivo `package.json` con la informacion de la libreria instalada.

Se debe evitar la subida de la carpeta `node_modules` al repositorio, para eso se crea un archivo `.gitignore` y se agrega la carpeta `node_modules` para que no se suba al repositorio.

```json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",  // el simbolo ^ significa que se puede actualizar a la ultima 
    // version de la libreria, pero no a una version mayor. El primer numero indica 
    // la version mayor, el segundo la version menor y el tercero la version de parche.
    "express": "^4.18.2"
  }
}
```
