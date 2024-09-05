// A = amount
// P = principal
// r = rate of interest
// n = number of times interest is compounded per year
// t = time (in years)

// let A;
const P = 10000;
const r = 0.035;
const n = 12;
const t = 7.5;

A = P * (1 + r/n)**(n*t);

console.log("The compound interest is: ", A);
