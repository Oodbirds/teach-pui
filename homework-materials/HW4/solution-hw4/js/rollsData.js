let cart = [];
let header = "Cinnamon Roll";
let productPrice = 0.00;
let productImg = "";

let headerVal = document.getElementById("page-title");
let imgVal = document.getElementById("big-display");
let priceVal = document.getElementById("total-price");
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

console.log("roll type "+ rollType);
console.log("price variable test" + priceContent);
console.log("current glaze and pack" + currentGlazeName + " " + currentPackName)

extractDetail(rollType);
setDetails();

function extractDetail(rollType){
    header = rollType + " Cinnamon Roll";
    console.log(header);
    productPrice = rolls[rollType].basePrice;
    console.log(productPrice);
    productImg = "../products/" + rolls[rollType].imageFile;
    console.log(productImg);
}

function setDetails(){
    headerVal.textContent = header;
    console.log(headerVal.textContent);
    imgVal.src = productImg;
    priceVal.textContent = productPrice;
    console.log("img source "+ imgVal.src);
    priceContent = productPrice;
}

document.getElementById("add-cart").onclick = function() {
    console.log("button was clicked");
    addToCart();
}
 function addToCart(){
    let newRollName = new Roll(rollType, currentGlazeName, currentPackName, productPrice);
    cart.push(newRollName);
    for(let i = 0; i < cart.length;i++){
        console.log("Cinnamon Roll Type: "+cart[i].type);
        console.log("selected Glaze: "+cart[i].glazing);
        console.log("quantity: "+cart[i].size);
        console.log("Base Price: "+cart[i].basePrice);
    }

}

