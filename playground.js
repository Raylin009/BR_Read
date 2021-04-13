const str = "I am awesome &&&24/7"
const char = str.match(/[A-Za-z]/g)
const num = str.match(/[0-9]/g)

console.table({str, char, num})