function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < Math.round(Math.sqrt(n) + 1); i++) {
        if (n % i === 0) return false;
    } return true;
}
function nextPrime(n){
    n = n + 1;
    while (!isPrime(n)){
        n++;
    } return n;
}