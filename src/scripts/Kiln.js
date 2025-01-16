export const firePottery = (potteryObject, kilnTemp) => {
   
    potteryObject.fired = true;
  
    if (kilnTemp > 2200) {
      potteryObject.cracked = true;
    } else {
      potteryObject.cracked = false;
    }
  

    return potteryObject;
  };

  /*define and export function firePottery (acting as kiln)
    it accepts 2 parameters potteryobject(a piece of pottery from makePottery and kilntemp a number for the fire temp)
    Added a new property (fire) and set it to true
    added new property (cracked) and set it to true if temp > 2200
    returns updated object of potteryobject */
    