
// let n = 50 

// let count = 0
// for(let i = 1; i<=50; i++){
//     if(n%i == 0){
//         count = count + 1
//     }
// }

// console.log(count) // 6


// 50 - 60


for(let  i = 5; i<=10; i++){

    // i = 50,51
    console.log("Factors of", i)
    for(let k = 1 ;  k<=i; k++){
          if(i%k == 0){
              console.log(k)
          }
    }
      
}