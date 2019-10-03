// // function run(){
// //     let graph = Object.create(null);
// //     console.log(graph)
// // }

// // run()

// var roads = [
//     "Alice's House-Bob's House",   "Alice's House-Cabin",
//     // "Alice's House-Post Office",   "Bob's House-Town Hall",
//     // "Daria's House-Ernie's House", "Daria's House-Town Hall",
//     // "Ernie's House-Grete's House", "Grete's House-Farm",
//     // "Grete's House-Shop",          "Marketplace-Farm",
//     // "Marketplace-Post Office",     "Marketplace-Shop",
//     // "Marketplace-Town Hall",       "Shop-Town Hall"
//   ];
  
//   function buildGraph(edges) {
//     let graph = Object.create(null);
//     //this creates a new object attached to the variable
//     function addEdge(from, to) {
//         // console.log(from, to)
//       //this function adds the rodes from and to
//       if (graph[from] == null) {
//         graph[from] = [to];
//         // console.log("****************",graph)
//       } else {
//         graph[from].push(to);
//         // console.log("XXXXXXX",graph)
//       }
//     }
//     for (let [from, to] of edges.map(r => r.split("-"))) {
//         console.log(edges.map(r => r.split("-")))
//       addEdge(from, to);
//       addEdge(to, from);
//     }
//     // console.log()
//     return graph;
//   }

// //   buildGraph(roads)

// let obj = {'Alice\'s House': [ 'Bob\'s House', 'Cabin' ]}
// function test(somthing){
//     somthing['Alice\'s House'] = ['steves'];
//     obj['Alice\'s House'].push('hide away');
//     console.log(!obj["Alice's House"].includes("hide\ away"))
//   }

//   test(obj)
