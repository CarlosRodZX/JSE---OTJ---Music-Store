const storeName = "Treble Clef";

const storeType = "Music Store";

const product1 = "Electric Guitar";
const product2 = "Acoustic Guitar";
const product3 = "Drum Set";
const product4 = "Keyboard";
const product5 = "Microphone";
const product6 = "Amplifier";


const price1 = 399
const price2 = 200
const price3 = 500
const price4 = 300
const price5 = 90
const price6 = 150

const storeHours = "Monday to Friday: 10AM - 8PM, Saturday: 10 AM - 6 PM, Sunday: Closed";


// Reusable Logging Function


const logMessage = (message) => {

  console.log(message);

};

const displayStoreInfo = (name, type) => {

    logMessage(`Welcome to ${name}! We are the best ${type} in town.`);

};


const displayInventory = (product, prices) => {

    logMessage("Here are the products we currently offer:");
    product.forEach((product, index) => {
      logMessage(`${product}: $ ${prices[index]}`);
    });

};



const addProduct = (product, prices) => {

  const removedProduct = product.pop();
  const removedPrice = prices.pop();

  logMessage(`Unfortunately, ${removedProduct} is out of stock.`);

  displayInventory(product, prices);
};



const displayFeaturedProducts= (products, numberOfFeatured) => { 

    const sortedProducts = [...products].sort(); 
    const featuredProducts = [];

}

const sortInventoryByPrice = (products, prices) => {
  const sortedPairs = prices
    .map((price, i) => [i, price]) 
    .sort((a, b) => a[1] - b[1]); 

  logMessage("Products sorted by price (low to high):");
  sortedPairs.forEach(([i]) => {
    logMessage(`${products[i]}: $${prices[i]}`);
  });
};

displayStoreInfo(storeName, storeType);

displayInventory(product1, price1);

addProduct(product1, price1, "Electric Guitar", 399);

removeLastProduct(product2, price2);

displayFeaturedProducts(product3, 3);

sortInventoryByPrice(product1, price1);

logMessage(`Thanks for visiting ${storeName}`);
logMessage(`Here are our store hours for reference: ${storeHours}`);




// console.log('Welcome to Treble Music! We are the best Music Store in town!');

// console.log("Here are the current products we offer! ")




// let products = [product1, product2, product3, product4, product5, product6]

// let prices = [price1, price2, price3, price4, price5, price6]



// console.log("Products:", products);

// console.log("Prices:", prices);



// products.push("Bass Guitar");
// prices.push(399.99);

// console.log("We've added a new product! Products:", products);
// console.log("Updated Prices:", prices);

// products.pop("Unfortunately, Electric Guitars are out of stock. Products:", products);

// prices.pop("Updated Prices, Prices:", prices);



// let featuredProducts = products.slice(2,3);

// console.log("This week, our featured products are:", featuredProducts );

// let newProducts = ["Bass Guitar", "Guitar Strings"];

// let newPrices = [399.99, 15.99];


// products = products.concat("newProducts");

// prices = prices.concat("newPrices");

// console.log("We have new arrivals! Products: ", products);

// console.log("Updated Prices:", prices);

// console.log('Thanks for visiting Treble Music!');
// console.log('Here are our hours for reference: Monday to Friday: 10 AM - 8 PM, Saturday: 10 AM - 6 PM, Sunday: Closed');
            











// const age = 14;

// if (age >= 14) {
// console.log('You can get your driver’s license')

// } else {

// console.log('You cannot get your license')

// }