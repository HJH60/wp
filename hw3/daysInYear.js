function daysInYear(n){
    if(n%4 == 0 && n%100 != 0) return 366
    else if(n%400 == 0) return 366
    else return 365
}

console.log("1991=>%d",daysInYear(1991))
console.log("2000=>%d",daysInYear(2000))
console.log("2004=>%d",daysInYear(2004))