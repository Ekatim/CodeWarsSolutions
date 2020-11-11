function minValue(values){
    let unique = values.filter((el, i) => i === values.indexOf(el));
    return +unique.sort((a, b) => a - b).join('');

}