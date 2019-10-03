// const range = (start, stop, step)=>{
//     let arr =[];
//     let jump=1
//     if(step){
//         jump = step
//     }
//     for(let i = start; i != stop; i += jump)
//         arr.push(i)
//     return arr;
// }

// const sum = x=>{
//     let total=0
//     for(let i = 0; i< x.length; i++ )
//         total += x[i];
//     return total;
// }

// console.log(range(2, 17, 1))//55
// // console.log(sum([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))

////////////////////////////////////////////////////////////////////
// reverse array
////////////////////////////////////////////////////////////////////

const reverseArray = arg =>{
    let temp = arg;
    let newA=[]
    for(let i of temp){
        newA.push(temp.pop())
    }
    newA.push(temp.pop())

    return newA; 
}

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];



const reverseArrayInPlace = array =>{
    for(let i=0; i < Math.floor((array.length)/2); i++){
        let x = array[i]
        array[i]=array[array.length - 1 -i];
        array[array.length - 1 - i] = x;
    }
    return array
}
let arrayValue = [1, 2, 3, 4, 5];
// console.log(reverseArrayInPlace(arrayValue));
// → [5, 4, 3, 2, 1]


//////////////////////
// a list
/////////////////////

const arrayToList= (input)=>{
    let list = null;
    for(let i=input.length -1; i>= 0; i--){
        //length is 2, but there is no [2] so need to make it start at 1, then go to and include 0
        list= {value: input[i], rest:list}
    }
    // console.log(list)
    return list

}

// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

const listToArray= list =>{
    let arr =[]
    for(let node=list; node; node=node.rest){
        //this equals the list while there is a next object it will traverse
        console.log(node.value)
        arr.push(node.value)
    }
    return arr
}

// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

const prepend = (input, func)=>{
    list= {value: input, rest:func}
    //sets the first value and then will call the function again setting the next layer
    return list
}

// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

const nth = (list, n) =>{
    //using n to ratchet down to the depth of the object
    if(!list) return undefined;
    else if(n == 0) return list.value;
    else return(nth(list.rest,n-1));
}

// console.log(nth(arrayToList([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 111,122, 1333, 1478912]), 9));
// → 20

const deepEqual = (x, y)=>{
    if(x===y) return true;
    if(typeof x ==null || typeof x != "object" || typeof y ==null || typeof y != "object")return false;
    let xKey = Object.keys(x);
    let yKey = Object.keys(y)
    // console.log(xKey)
    // console.log(x.here)
    if(xKey.length != yKey.length) return false;

    for(key of xKey){
        //if the ykeys dont include key, OR
        //it then calls deepedual comparing the objects called by the key... specifying x[key]
        // will compare {is:"an"} with the othe here value
        if(!yKey.includes(key) || !deepEqual(x[key], y[key])) 
        return false
    }
    return true

}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true