
import { productsModel } from "./db/models/products.model.js";

class ProductsManager{

    async getProducts(){
        try {
            const products = await productsModel.find({});
            return products;
            
        } catch (error) {
            return error;
        }
    }

    async createProduct(product){
        try {
            const newProduct = await productsModel.create(product);
            return newProduct;
            
        } catch (error) {
            return error;
        }
    }

    async getProductById(id){
        try {
            const product = await productsModel.findById(id);
            return product;
            
        } catch (error) {
            return error;
        }
    }

    async deleteProduct(id){
        try {
            const product = await productsModel.findByIdAndDelete(id);
            return product;
            
        } catch (error) {
            return error;
        }
    }
}



export default ProductsManager;
