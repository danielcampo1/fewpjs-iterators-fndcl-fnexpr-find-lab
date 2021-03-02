
function superbowlWin(record) {
     let win = record.find(record =>record.result === 'W')
      if (win){
        return win.year
     }
    else {
   return undefined
    }
    }



// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === 'cherries';
//   }
  
//   console.log(inventory.find(isCherries));
//   // { name: 'cherries', quantity: 5 }