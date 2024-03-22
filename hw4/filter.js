function filter(a,f){
    var counter = 0,b=[]
    for(var i in a){
        if(remainder(a[i]) == true){
            b[counter] = a[i]
            counter++
        }
    }
    return b
}
function remainder(x){
    if(x%2 == 1) return true
    else return false
}

var a = [9,6,2,5,3,8,4]
console.log(filter(a,remainder))