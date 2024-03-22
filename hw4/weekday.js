var e2n = {'Sunday':'0','Monday':'1','Tuesday':'2','Wednesday':'3','Thursday':'4','Friday':'5','Saturday':'6'}
function weekday(str){
    var number = []
    for (let i in str) {
        var eword = str[i]
        var num = e2n[eword]
        number.push(num)
    }
    return number
}

console.log('Deno.args=', Deno.args)
console.log(weekday(Deno.args))