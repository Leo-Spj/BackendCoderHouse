class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct(nombre, descripcion, precio, imagen, codigo, stock) {

        if (!nombre || !descripcion || !precio || !imagen || !codigo || !stock) {
            console.log("No agregado, todos los campos son obligatorios");
            return;
        } else if (this.products.find(p => p.codigo === codigo)) {
            console.log("No agregado, el codigo ya existe");
            return;
        } else {

            let id;

            if (this.products.length === 0) {
                id = 1;
            } else {
                id = this.products[this.products.length - 1].id + 1;
            }

            const newProduct = {
                id: id,
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                imagen: imagen,
                codigo: codigo,
                stock: stock
            }

            this.products.push(newProduct);
            console.log("Producto agregado correctamente");
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        let product = this.products.find(p => p.id === id);

        if (!product) {
            console.log("Producto no encontrado");
            return "";
        }

        return product;
    }

}

const manager = new ProductManager();

manager.addProduct("iPhone 14", "Nuevo iPhone 2023", 800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1", "A1A1", 10);
manager.addProduct("iPad Pro M2", "Nuevo iPad Pro 2023", 800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212", "A2A2", 10);
manager.addProduct("Macbook Air M2", "Nuevo Macbook Air 2023", 1100, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-silver-select-202306", "A3A3", 10);

console.log("");
console.log("Obtengo todos los productos:");
console.log(manager.getProducts());
console.log("");

console.log("Obtengo un producto por id:");
console.log(manager.getProductById(2));
console.log("");

console.log("Agrego un producto con un codigo que ya existe:");
manager.addProduct("iPhone 14", "Nuevo iPhone 2023", 800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1", "A1A1", 10);
console.log("");

console.log("Busco un producto que no existe:");
console.log(manager.getProductById(4));
console.log("");

let buscandoipad = manager.getProductById(2);
console.log(buscandoipad.descripcion)