let product1 = {
    name: "ACER Swift",
    category: "Technology",
    price: 6219
}
let product2 = {
    name: "ACER Nitro 5",
    category: "Technology",
    price: 5475
}
let product3 = {
    name: "ACER Gaming",
    category: "Technology",
    price: 3999
}
let product4 = {
    name: "LENOVO V14",
    category: "Technology",
    price: 7999
}
let product5 = {
    name: "LENOVO V15",
    category: "Technology",
    price: 4399
}

let products = [product1, product2, product3, product4, product5];
let userProduct = prompt("enter product name:");
let productsOfFilter = [];
addProductsToFilter(products);
printProducts(productsOfFilter);

function addProductsToFilter(products) {
    products.forEach(function (product) {
        if (product.name.toUpperCase().includes(userProduct.toUpperCase(), 0)) {
            productsOfFilter.push(product)
        }
    })
}
function printProducts(products) {
    products.forEach(function (product) {
        console.log("----------------------------------");
        console.log("|" + product.name + "|" + product.category + "|" + product.price);
    })

}

