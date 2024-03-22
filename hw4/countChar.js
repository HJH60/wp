function countChar(str){
    let cmap = {}
    for (let word of str) {
        let c = cmap[word]
        if (c == null) cmap[word] = 1
        else cmap[word] = cmap[word] + 1
    }
    return cmap
}

var string = "aabccadeaac"
console.log(countChar(string))