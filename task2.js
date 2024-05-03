let x = true
switch (typeof x) {
    case ("number"):
        console.log('x - это число')
        break;
    case ("boolean"):
        console.log('x - это логический тип')
        break;
    case ("string"):
        console.log('x - это строка')
        break;
    default:
        console.log('Тип x не определён')
}