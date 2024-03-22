function array_min(array){
    var i,min = array[0]
    for(i in array){
        if(array[i] <= min) min = array[i]
    }
    return min
}

var a=[9,6,2,5,3,8,4]
console.log("Min in array=%d",array_min(a))