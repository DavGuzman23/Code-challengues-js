
/*Ejercicio 1*/
const calculateSum = (number) => {
    let sumaTotal = 0
    for(let i = 1 ; i < number; i++){
        sumaTotal += i
    }
    return sumaTotal
}

console.log(calculateSum(5))
console.log(calculateSum(10))
console.log(calculateSum(200))



/*Ejercicio 2*/

const calculateSums = (numbers) => {
    let positivos = 0
    let suma = 0

    for(let i = 0; i < numbers.length ; i++){
        if(numbers[i] >= 0){
            positivos++
        }
    }

    filtroDeNumeros = numbers.filter((valor) => valor < 0)
    for(let i = 0; i < filtroDeNumeros.length; i++){
        suma += filtroDeNumeros[i]
    }

    return console.log("[" + positivos + "," + suma + "]")
}

calculateSums([0, 3, -2, -5, 4])
calculateSums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])



/* Ejercicio 3*/

function removeSpaces(word){
    return word.replace(/ /g, "")
}

console.log(removeSpaces("Hello my name is Roxy"))