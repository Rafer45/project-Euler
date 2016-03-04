var number = 600851475143;

// Maybe not the most efficient way, but pretty easy to digest.
// I'll havetoimprove it sometime later.

 // Abstracts the 'not modulus result' operation that returns true if it's divisible.
Number.prototype.isDivisibleBy = function(divisor) {
    return !(this % divisor);
}


Number.prototype.isPrime = function() {
    for (var i = 2; i <= this/2; i++) {
        if (this .isDivisibleBy(i)) {
            return false;
        }
    }
    return i >= 2;
}

function getNPrimes(n) {
    var numList = [],
        i = 2;
    while(numList.length < n){
        if (i .isPrime()) {
            numList.push(i);
        }
        i++;
    }

    return numList;
}

function getNthPrime(n) {
    return getNPrimes(n)[n-1];
}

function decompose(n) {
    var i = 1,
        myN = n,
        componentArr = [],
        iPrime = getNthPrime(i);

    while (myN != 1) {
        if (myN .isDivisibleBy(iPrime)) {
            myN /= iPrime;
            componentArr.push(iPrime)
        } else {
            i++;
            iPrime = getNthPrime(i);
        }
    }

    return componentArr;
}

console.log(1 .isPrime() == false);
console.log(4 .isPrime() == false);
console.log(19 .isPrime());

console.log(getNPrimes(12));
console.log(getNthPrime(12));

console.log(decompose(number));
console.log(decompose(1980));