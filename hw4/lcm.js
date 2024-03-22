function lcm(a,b){
    var lcm
    for(let i=1;i<a;i++){
        if((i*a)%b == 0) return i*a
    }
    
}

console.log("lcm=%d",lcm(15,18))