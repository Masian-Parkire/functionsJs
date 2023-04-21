//Create an array containing the names of all items in the inventory.
let grocery=["kales","tomatoes","cabbages","carrots","eggplant"];
//Create a separate array with the corresponding stock quantities of each item
let grocery_quantity=[7,120,10,100,200];

let twoArrays= {}
grocery.forEach((element,index)=>{
    twoArrays[element]=grocery_quantity[index]
});
console.log(twoArrays)
//Write a function to add a new item to the inventory, updating both arrays.

function addNewItem(){
    twoArrays.watermelon=3
}
addNewItem()
console.log(twoArrays)
//Write a function to update the stock quantity of an existing item.
function updateItems(){
    twoArrays["kales"]=15
}
updateItems()
console.log(twoArrays)
//Write a function to calculate the total number of items in the inventory.

let count =0
function calculate_total (){
    let obj =Object.values(twoArrays)
    let all =obj.reduce((first,last)=>first+last,count);
    console.log(all);
}
calculate_total()


//Write a function to find the item with the lowest stock quantity.
function find_lowest(){
    let newobject=Object.values(twoArrays)
    let lowest=Math.min(...newobject)
    console.log(lowest)
}
find_lowest()