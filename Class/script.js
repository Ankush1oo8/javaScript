class Product{
    static pi=3.14;
    constructor(name,price){
        this.name=name,
        this.price=price;
    }
    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`price: ${this.price}`);
    }

}
const amzon=new Product("fish",500);
amzon.displayProduct();

console.log(Product.pi)

// static =keyword that define properties or methods that belong 
//         belong to a class itself rather than the object crerated
//         from the class