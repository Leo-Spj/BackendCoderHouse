
import fs from 'fs';
import ProductManager from './ProductManager.js';

class CartsManager{

    constructor(pathCarritos, pathProductos) {
        this.pathCarritos = pathCarritos;
        this.pathProductos = pathProductos;
        this.arrayPropiedades = ['id', 'quantity'];

        this.productManager = new ProductManager(this.pathProductos);
    }

    async getCarts() {
        try {
            if (fs.existsSync(this.pathCarritos)) {
                const productos = await fs.promises.readFile(this.pathCarritos, 'utf-8');
                return JSON.parse(productos);
            } else {
                return [];
            }

        } catch (error) {
            return error;
        }
    }

    async getOneCart(id) {
        try {
            const carts = await this.getCarts();
            const cart = carts.find(c => c.id === +id);
    
            if (!cart) {
                return 'Carrito no encontrado';
            } else {
                return cart;
            }
        } catch (error) {
            return error;
        }
    }

    formateandoProducto (objeto) {
        let validObject = {};

        for (const propiedad in objeto) {
            if (this.arrayPropiedades.includes(propiedad)) {
                validObject[propiedad] = objeto[propiedad];
            }
        }

        return validObject;
    };

    async createCart() {
        try{
            const carritos = await this.getCarts();
            const arrayCarrito = [];

            let id;
            if(carritos.length === 0){
                id = 1;
            } else {
                id = carritos[carritos.length - 1].id + 1;
            }

            const newCarrito = { id, products: arrayCarrito };

            carritos.push(newCarrito);
            const carritosString = JSON.stringify(carritos);
            await fs.promises.writeFile(this.pathCarritos, carritosString);

            return newCarrito;

        } catch (error) {
            return error;
        }
    }

    async addProductToCart (cid, pid) {
        try{
            
            const carritos = await this.getCarts();
            const carrito = carritos.find(c => c.id === +cid);

            const productos = await this.productManager.getProducts();
            const producto = productos.find(p => p.id === +pid);

            if(!carrito){
                return 'Carrito no encontrado';
            }
            if(!producto){
                return 'Producto no encontrado';
            }
            if(producto.stock === 0){
                return 'No hay stock disponible';
            }

            const productoEnCarrito = carrito.products.find(p => p.id === +pid);
            
            const productoFiltrado = this.formateandoProducto(producto);

            if(!productoEnCarrito){
                productoFiltrado.quantity = 1;
                carrito.products.push(productoFiltrado);
            } else {
                productoEnCarrito.quantity += 1;
            }
            
            fs.promises.writeFile(this.pathCarritos, JSON.stringify(carritos));

            // Resto el stock del producto
            producto.stock -= 1;
            if(producto.stock === 0){ 
                producto.status = false;
            }

            fs.promises.writeFile(this.pathProductos, JSON.stringify(productos));

            return carrito;

        } catch (error) {
            return error;
        }
    
    }

}

export default CartsManager;