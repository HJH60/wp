function vectorAdd(a,b){
    var sum = []
    for (var i in a) {
        sum[i] = a[i] + b[i]
    }
    console.log("sum=(%d,%d,%d)",sum[0],sum[1],sum[2])
}

vectorAdd([1,2,3],[4,5,6])
