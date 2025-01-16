let potteryId = 1; //variable to hold initial value of 1

export const makePottery = (shape, weight, height) => {
    const pottery = {
        id: potteryId,
        shape: shape,
        weight: weight,
        height: height
    };   
    potteryId++;

    return pottery;
};
/* create function makePottery, accepts parameters for shape weight height
defines an object pottery that holds the properties of each individual pottery piece
++ takes current value, uses it, then adds 1 for the next time
returns the object pottery back to be used when function is called */
