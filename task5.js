let arr = [1, 2, 3, 4]
console.log("В массиве " + arr.length + " элемента")
arr.forEach(function(item, index, array) {
    console.log(item)
});

console.log("--------")

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}