// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let product1 = new Product("감자", 1000, 50);
let product2 = new Product("양파", 5000, 10);
let product3 = new Product("고구마", 2000, 60);

// 3개의 Object를 1개의 Array 객체에 모두 담는다.
let products = new Array(product1, product2, product3);

// JSON으로 변경시킨다.
let productJSONs = JSON.stringify(products);
console.log(productJSONs);