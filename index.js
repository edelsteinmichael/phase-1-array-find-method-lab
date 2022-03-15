// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

//   const results = record.find(result => record.result === "W") 
//   function superbowlWin(array) {
//       if (results === true) {
//           return record.year
//       }
//   }
function superbowlWin(score) {
    return score.result === "W"
}
   