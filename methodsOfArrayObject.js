function bigToSmall(arr){
    let res = [];
    for(let el of arr){
        res = res.concat(el);
    }
    return res.sort((a, b) => b - a).join('>');
}