const arr = [1, 2, 3, 4, 5, 6, 0, null, null, 0]
let even = 0
let odd = 0
let zero = 0
let nl = 0
for(let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if(element !== 0 && element !== null) {
        if(element % 2 === 0) {
            even++
        } else {
            odd++
        }
    } else if (element === 0) {
        zero++
    } else if (element === null) {
        nl++
    }
}
console.log("В массиве четных чисел: " +even)
console.log("В массиве нечетных чисел: " +odd)
console.log("В массиве кол-во нулей = " +zero)
console.log("В массиве кол-во null = " +nl)