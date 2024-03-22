function gcd(a,b){
    var gcd_num = 0
    for(var i=1;i<=a;i++){
        if(a%i == 0 && b%i == 0) gcd_num = i
    }
    return gcd_num
}

console.log("gcd=%d",gcd(36,24))