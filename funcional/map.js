const numbers = [1, 2, 3, 4, 5, 6]
const numbersV2 = numbers.map( (el) =>  el * 2)

//forma trabalhosa
const numbersV3 = []
for(let n of numbers) {
    numbersV3.push(n * 2)
}

console.log(numbers, numbersV2, numbersV3)

const students = [
    { name:"Jake", score: 6.4},
    { name:"Susan", score: 8.6},
    { name:"Emma", score: 6.4},
    { name:"Peter", score: 9.1},
]

// ceil arredonda pra cima e floor pra baixo
const getScore = el => el.socre



    const result = students
       .map(getScore)
       .map(Math.ceil)

console.log(students, result)
