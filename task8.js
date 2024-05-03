let map = new Map([
["Alebert", "Einstein"]
])
for(let name of map.keys()) {
for(let surname of map.values()) {
    console.log(`Ключ - ${name}, Значение - ${surname}`)
}
}