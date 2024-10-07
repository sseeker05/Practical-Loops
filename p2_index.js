// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.

let n = 7;

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        };
    }
    return true;
}

let nextNum = n + 1;

while (true) {
    if (isPrime(nextNum)) {
        console.log(nextNum);
        break;
    }
    nextNum++;
}