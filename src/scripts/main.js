// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 3);
let plate = makePottery("Plate", 5, 1);
let vase = makePottery("Vase", 3, 7);
let bowl = makePottery("Bowl", 2, 4);
let cup = makePottery("cup", 4, 3);

// Fire each piece of pottery in the kiln
const firedPottery1 = firePottery(mug, 2100);
const firedPottery2 = firePottery(plate, 2300); 
const firedPottery3 = firePottery(vase, 2100); 
const firedPottery4 = firePottery(bowl, 2100); 
const firedPottery5 = firePottery(cup, 2500);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedPottery1);
toSellOrNotToSell(firedPottery2);
toSellOrNotToSell(firedPottery3);
toSellOrNotToSell(firedPottery4);
toSellOrNotToSell(firedPottery5);

const potteryForSale = usePottery();

// Invoke the component function that renders the HTML list
const potteryHTML = PotteryList(); 
const potteryListElement = document.querySelector(".potteryList");
potteryListElement.innerHTML = potteryHTML;

/* 31 invokes potterylist function which generates the HTML, returns HTML string as potteryHTML
32 selects the article element in the DOM with the class PotteryList (serves as the container)
33 Inserts the potteryHTML into the .potteryList element, rendering the pottery catalog on the webpage*/

//step 1, step 2, & step 3 checking my work console logs
console.table([firedPottery1, firedPottery2, firedPottery3, firedPottery4, firedPottery5]);
