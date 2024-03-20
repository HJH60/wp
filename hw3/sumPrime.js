function sumPrime(n){
    var sum = 0    
    for(let j=2;j<n;j++){
        if(isPrime(j) == true) sum +=j
    }
    
    console.log("sum=%d",sum)
}
function isPrime(n){
    for(let i=2;i<n;i++){
        if(n%i == 0) return false
    }
    return true
}
sumPrime(10)
