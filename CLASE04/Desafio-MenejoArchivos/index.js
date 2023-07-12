
// Desafio: Manejo de archivos


// Productos de ejemplo
const producto1 = {
    title: 'iPhone 14',
    description: 'Nuevo iPhone 2022',
    price: 800,
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1',
    code: 'A1A1',
    stock: 10
}
const producto2 = {
    title: 'iPad Pro M2',
    description: 'Nuevo iPad Pro 2022',
    price: 800,
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212',
    code: 'A2A2',
    stock: 10
}
const producto3 = {
    title: 'Macbook Air M2',
    description: 'Nuevo Macbook Air 2022',
    price: 1100,
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-silver-select-202306',
    code: 'A3A3',
    stock: 10
}



const fs = require('fs');       // File System

class ProductManager{
    constructor(path){
        this.path = path;
    }

    async getProducts(){
        try{
            if(fs.existsSync(this.path)){
                const productos = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(productos);
            } else {
                return [];
            }

        } catch(error){
            return error;
        }
    }

    checkProduct(producto){
        if(producto.title && producto.description && producto.price && producto.thumbnail && producto.code && producto.stock){
            return true;
        } else {
            return false;
        }
    }

    async addProduct(producto){
        try{
            if(this.checkProduct(producto)){
                const productos = await this.getProducts();

                if(productos.find(p => p.code === producto.code)){
                    return 'Codigo existente';
                } else {
                    let id;
                    if(productos.length === 0){
                        id = 1;
                    } else {
                        id = productos[productos.length - 1].id + 1;
                    }

                    productos.push({...producto, id});
                    const jsonProductos = JSON.stringify(productos);
                    await fs.promises.writeFile(this.path, jsonProductos, 'utf-8');

                    return 'Producto agregado correctamente';   
                }           

            } else {
                return 'Producto invalido';
            }

        } catch(error){
            return error;
        }
    }

    async getProductById(id){
        try{
            const productos = await this.getProducts();
            const producto = productos.find(p => p.id === id);

            if(!producto){
                return 'Producto no encontrado';
            } else {
                return producto;
            }

        } catch (error){
            return error;
        }
    }

    async updateProductById(id, producto){
        try{
            if(this.checkProduct(producto)){
                const productos = await this.getProducts();
                const indice = productos.findIndex(p => p.id === id);
                
                if(indice === -1){
                    return 'Producto no encontrado';
                } else {
                    productos[indice] = {...producto, id};
                    const jsonProductos = JSON.stringify(productos);
                    
                    await fs.promises.writeFile(this.path, jsonProductos, 'utf-8');
                    return 'Producto actualizado correctamente';
                }
            }

        } catch (error){
            return error;
        }
    }

    async deleteProductById(id){
        try{
            const productos = await this.getProducts();
            const indice = productos.findIndex(p => p.id === id);

            if(indice === -1){
                return 'Producto no encontrado';
            } else {
                productos.splice(indice, 1);
                const jsonProductos = JSON.stringify(productos);
                await fs.promises.writeFile(this.path, jsonProductos, 'utf-8');
                return 'Producto eliminado correctamente';
            }

        } catch (error){
            return error;
        }
    }

}

async function prueba(){
    const manager = new ProductManager('CLASE04/Desafio-MenejoArchivos/productos.json'); // creo el manager con el path del archivo
    console.log(await manager.addProduct(producto1));
    console.log(await manager.addProduct(producto2));
    console.log(await manager.addProduct(producto3));

    console.log(await manager.getProducts());

    console.log(await manager.getProductById(2));

    const objetoActualizado2 = {
        title: 'iPad Pro M3',
        description: 'Nuevo iPad Pro 2023',
        price: 900,
        thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212',
        code: 'A2A2',
        stock: 10
    }
    console.log(await manager.updateProductById(2, objetoActualizado2));

    console.log(await manager.deleteProductById(1));

    // un producto invalido
    const producto4 = {
        title: 'Google Pixel 6',
        description: 'Nuevo Google Pixel 2022',
        price: 800,
        thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1',
        code: 'A4A4'
    }
    console.log(await manager.addProduct(producto4));
}

prueba();
