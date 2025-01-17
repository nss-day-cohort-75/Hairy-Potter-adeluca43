
let potteryForSale = [];

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false) {
        if (pottery.weight >= 6) {
            pottery.price = 40;
        } else if (pottery.weight < 6) {
            pottery.price = 20;
        }

        potteryForSale.push(pottery);
    }

    return pottery;
}

export const usePottery = () => {
    return potteryForSale.slice();
};

/* 
`potteryForSale` is a variable initialized with an empty array.
It stores pottery objects that meet the criteria for being sold.
The toSellOrNotToSell function is defined and exported. 
It checks if the pottery is uncracked (`pottery.cracked === false`).
If the pottery is uncracked:The weight is evaluated to determine the price:
        - Weight >= 6: Price is set to 40.
        - Weight < 6: Price is set to 20.
    - .push() is used to add the modified pottery object to the `potteryForSale` array.
The function returns the pottery object with the updated price
usePottery function is defined and exported,returns a copy of
 potteryForSale array using .slice(). (makes a copy of array)
 original array remains unmodified 
It provides safe access to the list of sellable pottery.
*/


