// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(array) {
   const foundItem = array.find(function(object) {
        return  object.result === "W"
   })
    console.log(foundItem)
    if(foundItem) {
        return foundItem.year
    }
}
   