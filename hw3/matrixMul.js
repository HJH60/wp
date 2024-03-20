function  matrixMul(a,b){
    var c = []
    for (var i = 0; i < a.length; i++) {
        c[i] = [0,0]
        for (var j = 0; j < b[0].length; j++) {
            for (var k = 0; k < b.length; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c
}

var a = [[1,2],[3,4]],b =  [[5,6],[7,8]]
console.log(matrixMul(a,b))