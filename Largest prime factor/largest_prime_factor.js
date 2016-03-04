var number = 600851475143;

// Maybe not the most efficient way, but pretty easy to digest.
// I'll havetoimprove it sometime later.

 // Returns the 'not modulus result' operation that returns true if it's divisible.
Number.prototype.isDivisibleBy = function(divisor) {
    return !(this % divisor);
}

// Returns whether or not a number is prime. Not efficient.
Number.prototype.isPrime = function() {
    for (var i = 2; i <= this/2; i++) {
        if (this .isDivisibleBy(i)) {
            return false;
        }
    }
    return i >= 2;
}

// Returns an array with n prime numbers, ascending from 2.
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

// returns the nth prime number, starting from 2.
function getNthPrime(n) {
    return getNPrimes(n)[n-1];
}

// Returns an array with number's prime factors in ascending order.
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