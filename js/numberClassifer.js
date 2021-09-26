//alert("God is good")
//Given an array of Numbers,write a function classifyNumbers
//that returns a category for each numbers in an object your function should be able to categorize each number
// even: numbers divisible by two 
// odd : numbers not divisible by two
// unit : number between 1 and 9 inclusive
// tens : numbers between 10 and 99 inclusive 
// hundreds : numbers between 100 and 999 inclusive
// other: 0 or numbers greater than or equal to 1000
let num = [1,2,3,4,5,6,7,8,9,10,20,30,50,70,90,120,99,999,1000,150,650,800,550,450,0,1200,1300,1100,2500,1400];
let even =[]
let odd = []
let unit =[]
let tens = []
let hundreds =[]
let others = []
function classifyNumbers(num){
    for(let i=0;i<num.length;i++){
        if(num[i]%2 === 0){
          even.push(num[i])
        }else if(num[i]%2 === 1){
          odd.push(num[i]) 
        }if(num[i]>=1 && num[i]<=9){
          unit.push(num[i])
        }else if (num[i]>=10 && num[i]<= 99){
          tens.push(num[i])
        }else if(num[i]>=100 && num[i]<=999){
          hundreds.push(num[i])
        }else if(num[i]>= 0 && num[i]<=1000){
          others.push(num[i])
        }
    }
    //return even
    //return odd
    //return unit
    //return tens
    //return hundreds
    return others
}
console.log(classifyNumbers(num))

// unit : number between 1 and 9 inclusive
// tens : numbers between 10 and 99 inclusive 
// hundreds : numbers between 100 and 999 inclusive
// other: 0 or numbers greater than or equal to 1000