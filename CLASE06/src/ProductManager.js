


import fs from 'fs';


class ProductManager {

    constructor(path) {
        this.path = path;
    }

    async getProducts() {
        try {
            if (fs.existsSync(this.path)) {
                const productos = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(productos);
            } else {
                return [];
            }

        } catch (error) {
            return error;
        }
    }

    checkProduct(producto) {
        if (producto.title && producto.description && producto.price && producto.thumbnail && producto.code && producto.stock) {
            return true;
        } else {
            return false;
        }
    }

    async addProduct(producto) {
        try {
            if (this.checkProduct(producto)) {
                const productos = await this.getProducts();

                if (productos.find(p => p.code === producto.code)) {
                    return 'Codigo existente';
                } else {
                    let id;
                    if (productos.length === 0) {
                        id = 1;
                    } else {
                        id = productos[productos.length - 1].id + 1;
                    }

                    productos.push({ ...producto, id });
                    const jsonProductos = JSON.stringify(productos);
                    await fs.promises.writeFile(this.path, jsonProductos, 'utf-8');

                    return 'Producto agregado correctamente';
                }

            } else {
                return 'Producto invalido';
            }

        } catch (error) {
            return error;
        }
    }

    async getProductById(id) {
        try {
            const productos = await this.getProducts();
            const producto = productos.find(p => p.id === id);

            if (!producto) {
                return 'Producto no encontrado';
            } else {
                return producto;
            }

        } catch (error) {
            return error;
        }
    }

    async updateProductById(id, producto) {
        try {
            if (this.checkProduct(producto)) {
                const productos = await this.getProducts();
                const indice = productos.findIndex(p => p.id === id);

                if (indice === -1) {
                    return 'Producto no encontrado';
                } else {
                    productos[indice] = { ...producto, id };
                    const jsonProductos = JSON.stringify(productos);

                    await fs.promises.writeFile(this.path, jsonProductos, 'utf-8');
                    return 'Producto actualizado correctamente';
                }
            }

        } catch (error) {
            return error;
        }
    }

    async deleteProductById(id) {
        try {
            const productos = await this.getProducts();
            const indice = productos.findIndex(p => p.id === id);

            if (indice === -1) {
                return 'Producto no encontrado por su id';
            } else {
                productos.splice(indice, 1);
                const jsonProductos = JSON.stringify(productos);
                await fs.promises.writeFile(this.path, jsonProductos, 'utf-8');
                return 'Producto eliminado correctamente mediante su id';
            }

        } catch (error) {
            return error;
        }
    }

    async deleteProductByCode(code){
        try{
            const productos = await this.getProducts();
            const indice = productos.findIndex(p => p.code === code);

            if(indice === -1){
                return 'Producto no encontrado por su codigo';
            } else{
                productos.splice(indice,1);
                const jsonProductos = JSON.stringify(productos);
                await fs.promises.writeFile(this.path, jsonProductos, 'utf-8');
                return 'Producto eliminado correctamente mediante su codigo';
            }

        } catch (error){
            return error;
        }
    }

}

export default ProductManager;
