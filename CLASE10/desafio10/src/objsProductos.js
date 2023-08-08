
import ProductManager from './managers/ProductManager.js';


// Productos electronicos

const prod1 = {
    title: 'iPhone 12',
    description: 'Apple iPhone 12 64GB',
    price: 1100,
    thumbnail: 'https://th.bing.com/th/id/OIP.2EJ_q8XoqFBNXwKyRVcQTAAAAA?pid=ImgDet&rs=1',
    code: 'IP12-64GB',
    stock: 2,
  status: true,
    category: 'Phones'
};

const prod2 = {
    title: 'Samsung Galaxy S21',
    description: 'Samsung Galaxy S21 128GB',
    price: 1000,
    thumbnail: 'https://th.bing.com/th/id/OIP.N12Y7tqXuDtACdPSXTeDCAAAAA?pid=ImgDet&rs=1',
    code: 'SGS21-128GB',
    stock: 2,
     
    category: 'Phones'
};

const prod3 = {
    title: 'Xiaomi Mi 11',
    description: 'Xiaomi Mi 11 128GB',
    price: 900,
    thumbnail: 'https://th.bing.com/th/id/OIP._S97cwG7mAG9Qu37OuVxQAAAAA?pid=ImgDet&rs=1',
    code: 'XMM11-128GB',
    stock: 2,
     
    category: 'Phones'
};

const prod4 = {
    title: 'Huawei P40',
    description: 'Huawei P40 128GB',
    price: 800,
    thumbnail: 'https://th.bing.com/th/id/OIP.j_QzkLIL0DbX1T8sHCCrxQAAAA?pid=ImgDet&rs=1',
    code: 'HWP40-128GB',
    stock: 2,
     
    category: 'Phones'
};

const prod5 = {
    title: 'Motorola Edge',
    description: 'Motorola Edge 128GB',
    price: 700,
    thumbnail: 'https://th.bing.com/th/id/OIP.y_KuuwL8BdH9ac_laJGZoQAAAA?pid=ImgDet&rs=1',
    code: 'MTE-128GB',
    stock: 2,
     
    category: 'Phones'
};

// Productos de computacion

const prod6 = {
    title: 'Macbook Pro',
    description: 'Apple Macbook Pro 13 256GB',
    price: 2000,
    thumbnail: 'https://th.bing.com/th/id/OIP.-1fZaV9rXE1nRwHgVXz2wAAAAA?pid=ImgDet&rs=1',
    code: 'MBP13-256GB',
    stock: 2,
     
    category: 'Computers'
};

const prod7 = {
    title: 'Dell XPS 13',
    description: 'Dell XPS 13 13.3',
    price: 1800,
    thumbnail: 'https://th.bing.com/th/id/OIP.rI7hWoo4nr2cyMEGet6WPgAAAA?pid=ImgDet&rs=1',
    code: 'DXPS13-13.3',
    stock: 2,
     
    category: 'Computers'
};

const prod8 = {
    title: 'Lenovo ThinkPad X1',
    description: 'Lenovo ThinkPad X1 14',
    price: 1600,
    thumbnail: 'https://th.bing.com/th/id/OIP.rFJHL373MH-8cAHMCMO8IwAAAA?pid=ImgDet&rs=1',
    code: 'LTPX1-14',
    stock: 2,
     
    category: 'Computers'
};

const prod9 = {
    title: 'HP Spectre x360',
    description: 'HP Spectre x360 13',
    price: 1400,
    thumbnail: 'https://th.bing.com/th/id/R.393d37fe8e21389bf4104df5f3452658?rik=soprZCdszQ4Y%2bQ&riu=http%3a%2f%2fitmechanizer.com%2fmy_uploads%2f2019%2f04%2fSpectre.png&ehk=1wNrDoAsdJ8XSEsoFumykoug7fojQBf7YYCPPW0Jg%2bc%3d&risl=&pid=ImgRaw&r=0',
    code: 'HPSX360-13',
    stock: 2,
     
    category: 'Computers'
};

const prod10 = {
    title: 'Asus ZenBook 13',
    description: 'Asus ZenBook 13 13.3',
    price: 1200,
    thumbnail: 'https://th.bing.com/th/id/R.95781e260e09cd37a75aa848e7b46ed0?rik=asCTK8cBgOblKA&pid=ImgRaw&r=0',
    code: 'AZB13-13',
    stock: 2,
     
    category: 'Computers'
};

// Electronica de consumo

const prod11 = {
    title: 'Sony WH-1000XM4',
    description: 'Sony WH-1000XM4',
    price: 300,
    thumbnail: 'https://th.bing.com/th/id/OIP.K2V8Vz-O9YJvE7aFeLoOuwAAAA?pid=ImgDet&rs=1',
    code: 'SWH1000XM4',
    stock: 2,
     
    category: 'Headphones'
};

const prod12 = {
    title: 'Bose Noise Cancelling Headphones 700',
    description: 'Bose Noise Cancelling Headphones 700',
    price: 280,
    thumbnail: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/noise_cancelling_headphones_700/product_silo_images/noise_cancelling_headphones_700_blk_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png',
    code: 'BNCH700',
    stock: 2,
     
    category: 'Headphones'
};

const prod13 = {
    title: 'Apple AirPods Pro 2',
    description: 'Apple AirPods Pro 2',
    price: 260,
    thumbnail: 'https://th.bing.com/th/id/OIP.7Z0T4E9MSIpTlpqA9UyR-AAAAA?pid=ImgDet&rs=1',
    code: 'AAP2',
    stock: 2,
     
    category: 'Headphones'
};

const prod14 = {
    title: 'Sennheiser Momentum True Wireless 2',
    description: 'Sennheiser Momentum True Wireless 2',
    price: 240,
    thumbnail: 'https://th.bing.com/th/id/OIP.ogtv3KMPa-R2t3-dyfNMigAAAA?pid=ImgDet&rs=1',
    code: 'SMWTW2',
    stock: 2,
     
    category: 'Headphones'
};

const prod15 = {
    title: 'Jabra Elite 75t',
    description: 'Jabra Elite 75t',
    price: 220,
    thumbnail: 'https://th.bing.com/th/id/OIP.n_TKszUoQQegDDvuCu4hOgAAAA?pid=ImgDet&rs=1',
    code: 'JET75',
    stock: 2,
    
    category: 'Headphones'
};




const productos = new ProductManager('./src/JSONs/productos.json');

async function main() {
    for (let i = 1; i <= 15; i++) {
        await productos.addProduct(eval(`prod${i}`));
    }
}

main();