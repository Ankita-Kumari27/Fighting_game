//  let arrs = ["ankita","saloni",6,98.78,true,'🍌','🥭']
// for(let i = 0 ;i<arrs.length;i++){
//      console.log(i , arrs[i])
// }


// for(let arr of arrs ){
//      console.log(arr)
// }

// let sqaure = (numbers) =>{
//   let res = []
// for (let num of numbers ){
//    res.push(num*num)

// }   
// return res
// }
// console.log(sqaure([2,6,7,9,8]))

// let result = 0
// let letterCounter = (sentence) =>{
//      for (let l in sentence){
//           console.log(Number(l)+1)
//          result = Number(l) + 1
//      }
//      return {result:result}
// }
//  console.log(letterCounter("i am ankitaa kumari"))


// let res = 0 ;
// let add = (numbers) => {
//      for(let num of numbers){
//           res = res + num
//      }
//      return res
// }
// console.log(add([1,2,3,4,5,6,7,8,9,10]))



// let max = (number) =>{
//      let res = number[0]
//      for(let num of number) {
//           if(num>res){
//                res = num
//           }
//      }
//      return {res}
// }
// console.log(max([90,8,7,5,10]))


// let frequency = (phrase) =>{
// //      //make frequency object
//      let freqobj = { }
//  for(let letter of phrase){
//      //check if letter exists or not
//        //if yes increment by 1 or make it one
//        if(letter in freqobj){
//          freqobj[letter] = freqobj[letter]+1
//        }
//        else{
//           freqobj[letter]=1
//        }
//  }
//  return freqobj

// }
// console.log(frequency('yoyo haha'))



// let wordFrequency = (phrase) =>{
//    let  word = phrase.split(" ")
//    return frequency(word)
 
// }
// console.log(wordFrequency("hello i am ankita i am very good student"))

//MAP
// let doubleMap = (number)=>{
//     return number.map(number=>number*2)
// }
// console.log(doubleMap([7,5,6,8,9,4]))

// //FILTER
// let nums = [4,5,1,2,38,99,55,10]
// console.log(nums.filter(num=>num>=10))

// let actors = [
//  {name:"salman khan",netWorth:0},
//  {name:"sahrukhan", netWorth: 2},
//  {name:"pankaj tripathi", netWorth: 30},
//  {name:"manoj", netWorth: 1},
//  {name:"veeneet kumar", netWorth: 2},
// ]
// console.log(actors.filter(actor=>actor.netWorth>10))


//REDUCE  
// const nums = [1,2,3,4,5,6,7,8,9,10]
// let res = nums.reduce(function(prev,curr){
//     return prev+curr
// })
// console.log(res)

// const nums1 = [1,2,3,7]
// let res1 = nums1.reduce((prev,curr) => prev*curr,0)
// console.log(res1)


// console.log(actors.reduce((a,b) => a + b.netWorth,0))


//SELECT RANDOMM ELEMENT OF ARRAY
// let arrs = ["ankita","saloni",6,98.78,true,'🍌','🥭']
// let randomArray =  (arrs) =>{
//   let randomNum =   Math.floor(Math.random()*arrs.length)
//     return arrs[randomNum]
// }
// console.log(randomArray(arrs))


// //IF ELSE IF ELSE
// const  weatherScore = (weather) =>{
//     let score
//         if(weather == 'rainy'){
//             score=1
//         }
//         else if(weather=='sunny'){
//             score=-1
//         }
//         else{
//             score = 0
//         }
//         return score
// }
// console.log(weatherScore('sunny'))