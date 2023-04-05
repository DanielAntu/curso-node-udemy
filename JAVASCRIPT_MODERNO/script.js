// 1 - var, let e const
var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2 - arrow function
const sum = function sum(a, b) {
    return a + b;
};

const arrowSum = (a, b) => {
    return a + b;
};

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

//  3 - filter

const arr = [1, 2, 3, 4, 5];
console.log(arr);
const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(highNumbers);

// 4 - map
const products = [
    { name: "Camisa", price: 10.99, category: "Roupas" },
    { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
    { name: "Fogão", price: 400, category: "Eletro" },
    { name: "Calça jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
    if (product.category === "Roupas") {
        product.onsale = true;
    }
});

console.log(products);

// 5 - templates literals
const userName = "Matheus";
const age = 30;

console.log(`O nome do usuario é ${userName} e tem ${age} anos`);

// 6 - destructure
const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;
console.log(f1);
console.log(f3);

// 7 - spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);
