
//Q1:  lets take a number and reverse it 

// 456 => 654


// q2: check if a  number is pallindrome
// original number = reverse number
// 121 => 121





// let n = 121
// let original = n

// let rev = 0
// while(n>0){ // 1
//     let last = n%10 // 4
//     // console.log(last)
//       rev = rev*10 + last // 654

//     n = parseInt(n/10) // 0
// }

// // console.log(rev) // 654
// console.log(original, rev)
// if(original == rev){
//     console.log("Pallindrome")
// }
// else{
//     console.log("Not Pallindrome")
// }



// Take a number and print in normal order 
// 456 
// 4
// 5
// 6

// 456 =>  654 => 

let n = 456 


// reverse: 

let rev = 0

while(n>0){
    let last = n%10
    rev = rev*10 + last
    n = parseInt(n/10)
}

// console.log(rev)
n = rev // 654


while(n>0){
    let last = n%10 // 4,5,6
    console.log(last)
    n = parseInt(n/10)
}