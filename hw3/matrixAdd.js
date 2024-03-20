function matrixAdd(a,b){
    var i, j, c = []
    for (i=0; i<a.length; i++) {
        c[i] = []
        for (j=0; j<a[i].length; j++) {
            c[i][j] = a[i][j] + b[i][j]
        }
    }
    return c
}
var a=[[1,2],[3,4]], b=[[5,6],[7,8]]
console.log(matrixAdd(a,b))