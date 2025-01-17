
import { usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
    const potteryForSale = usePottery();

    const potteryHTML = potteryForSale.map(pottery => `
        <section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>
    `).join(""); 

    return potteryHTML; 
};
/*import usePottery to get sellable pottery
export and create PotteryList Function
line 5: get the array of pottery to be sold
converts each object into an HTML representation 
.join combines the HTML into a single string
returns this string for all pottery items on the DOM */