

const flatten= (arr) =>{
    // let temp = arr.concat()
    //returns this [ [ 1, 2, 3 ], [ 4, 5 ], [ 6 ] ]
    return arr.reduce((a,b)=>a.concat(b))
}

let arrays = [[1, 2, 3], [4, 5], [6]];


// console.log(flatten(arrays))
// Your code here.
// → [1, 2, 3, 4, 5, 6]

function every(array, test) {
///this works for a for loop
    // for(let x of array){
    //     if(!test(x)) return false;
    // }
    // return true;
///////////
    return !array.some(x=>!test(x)) 


}
  
//   console.log(every([1, 3, 5], n => n < 10));
//   // → true
//   console.log(every([2, 4, 16], n => n < 10));
//   // → false
//   console.log(every([], n => n < 10));
  // → true

  const loop=(n,test, body, log)=>{
    // console.log(test(n))
    for(n;test(n);n=body(n)){log(n)}
  }

  // loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

