var h = 0.01
function gradient(f,p){
    let gp = p.slice()
    for(let k = 0;k<p.length;k++){
        gp[k] = df(f,p,k)
    }
    return gp
}
function f(p){
    [x,y] = p
    return x*x+y*y
}
function df(f,p,k){
    let p1 = p.slice()
    p1[k] += h
    return (f(p1) - f(p) )/ h
}
let [x,y] = [1,3]
console.log('x=',x,'y=',y)
console.log('df(f(x,y), 0) = ', df(f, [x, y], 0))
console.log('df(f(x,y), 1) = ', df(f, [x, y], 1))
console.log('grad(f)=', gradient(f, [x,y]))