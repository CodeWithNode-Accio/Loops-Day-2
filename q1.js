
// let n = 456
// while(n>0){
//   let last =  n%10 // 6 , 5, 4
//    console.log(last)
//    n = parseInt(n/10)  // 45, 4, 0
// }



// for(let i = n; i>0; i = parseInt(i/10)){
//     let last = i%10
//     console.log(last)
// }



// for(let i=n; i>0; i = parseInt(i/10)){
//    let last = i%10 // 6, 5, 4
//    console.log(last)
// }










// last =  n%10  // 6
// n = parseInt(n/10) // 45


// last =  n%10  // 5
// n = parseInt(n/10) // 4 



// last =  n%10 // 4
// remianing = parseInt(n/10) // 0






let n = 456

for(i = n; i!=0 ; ){


    let last = i%10 // 6, 5, 4
    console.log(last)
    let remianingDigit = parseInt(i/10) // 0

    i = remianingDigit
}
