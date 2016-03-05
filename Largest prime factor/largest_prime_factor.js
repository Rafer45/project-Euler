var problemN = 600851475143;

function getHighestPrimeFactor(n) {
    var i = 2,
        myN = n;

    // Since i always divides when possible, it
    // exhausts all possible divisors before itself.

    // If i itself squared is greater than n, n cannot
    // be decomposed further, since the only possible
    // remaining divisors are i and n.

    while (i * i < myN) {
        while(myN % i == 0) {
            myN /= i;
        }
        i++;
    }
    return myN;
}

console.log(getHighestPrimeFactor(problemN))
console.log(getHighestPrimeFactor(3141592653589))