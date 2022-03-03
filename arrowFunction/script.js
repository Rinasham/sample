const nameArr = ['Henry','Matt','Dan']

// These two work
nameArr.map((name) => console.log(name))

nameArr.map(function(name){
  console.log(name)
})

// This doesn't work!!!
let x = nameArr.map((name) => console.log(name))
console.log(x)

// This doesn't work!!!
function showName(arr){
  arr.map(function(name){
    console.log(name)
  })
}

let a = showName(nameArr)
console.log(a)





const sumFunc = (num1, num2) => console.log(num1 + num2)

function sumFunc2(num1, num2){
  console.log(num1 + num2)
}
sumFunc2(1,2)

// This doesn't work!!!
let b = sumFunc2(1,2)
console.log(b)