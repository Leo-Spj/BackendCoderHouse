class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return 'No agregado, todos los campos son obligatorios. ';            
        } else if (this.products.find(p => p.code === code)) {
            return 'No agregado, el code ya existe. ';            
        } else {

            let id;

            if (this.products.length === 0) {
                id = 1;
            } else {
                id = this.products[this.products.length - 1].id + 1;
            }

            const newProduct = {
                id: id,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }

            this.products.push(newProduct);
            return 'Producto agregado correctamente. ';
            
        }
    }

    getProductById(id) {
        let product = this.products.find(p => p.id === id);

        if (!product) {
            return 'Producto no encontrado. ';            
        }

        return product;
    }

}

const manager = new ProductManager();

console.log( 
    manager.addProduct("iPhone 14", "Nuevo iPhone 2023", 800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1", "A1A1", 10),
    manager.addProduct("iPad Pro M2", "Nuevo iPad Pro 2023", 800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212", "A2A2", 10),
    manager.addProduct("Macbook Air M2", "Nuevo Macbook Air 2023", 1100, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-silver-select-202306", "A3A3", 10)
);
console.log("");
console.log("Obtengo todos los productos:");
console.log(manager.getProducts());
console.log("");

console.log("Obtengo un producto por id:");
console.log(manager.getProductById(2));
console.log("");

console.log("Agrego un producto con un code que ya existe:");
console.log(
manager.addProduct("iPhone 14", "Nuevo iPhone 2023", 800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1", "A1A1", 10),
manager.addProduct("iPhone 14", "Nuevo iPhone 2023", 800, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1", "A1A1", 10)
);
console.log("");

console.log("Busco un producto que no existe:");
console.log(manager.getProductById(4));
console.log("");


console.log(manager.getProductById(2))
