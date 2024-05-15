
function myfirst(...input){
    if (!input)
    return 0
    let numbers=input.map(Number);
    let sum=numbers.reduce((acc,cur) => acc+cur, 0)
    return sum
}
console.log(myfirst(1,2,4))
  
