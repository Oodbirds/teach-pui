let glazeSelect = document.getElementById("glazingOptions");
let packSelect = document.getElementById("pack-size");
let price = document.getElementById("total-price");
let currentGlaze = 0.00;
let currentPack = 1.00;
class Glazing{
    
    constructor(name,price){
        this.cinnamonRollName = name;
        this.cinnamonRollPrice = price;
    }
}

class PackSize{
    
    constructor(name, quantity){
        this.quantityName = name;
        this.cinnamonRollQuantity = quantity;
    }
}
  
const keepOriginal = new Glazing("Keep Original",0)
const sugarMilk = new Glazing("Suage Milk",0)
const vanillaMilk = new Glazing("Vanilla Milk",0.5)
const doubleChocolate = new Glazing("Double Chocolate",1)

const one = new PackSize ("1",1)
const three = new PackSize ("3",3)
const six = new PackSize ("5",5)
const twelve = new PackSize("10",10)

let glazingElmnts = [keepOriginal,sugarMilk,vanillaMilk,doubleChocolate];
let packSizeElmnts = [one, three, six, twelve];

for (let i = 0; i < glazingElmnts.length; i++) {
    let glazeOptn = glazingElmnts[i];
    let optn= document.createElement("option");
    optn.textContent = glazeOptn.cinnamonRollName;
    optn.value = glazeOptn.cinnamonRollPrice;
    glazeSelect.appendChild(optn)
}
for (let i = 0; i < packSizeElmnts.length; i++) {
    let packOptn = packSizeElmnts[i];
    let optn= document.createElement("option");
    optn.textContent = packOptn.quantityName;
    optn.value = packOptn.cinnamonRollQuantity;
    packSelect.appendChild(optn)
}

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value
    currentGlaze = Number(priceChange);
    upDatePrice();
}
function packChange(element) {
    // get value of selected glazing option
    const priceChange = element.value
    currentPack = Number(priceChange);
    upDatePrice();
}
function upDatePrice (){
    let total = (2.49 + currentGlaze)*currentPack;
    console.log(currentGlaze);
    console.log(currentPack);
    console.log(total);
    price.textContent = total.toString();
}