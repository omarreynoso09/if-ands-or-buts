const prompt = require('prompt-sync')();

const billTotal = Number(prompt('What is the bill total?'))

const person1 = Number(prompt('How much did person 1 pay?'));

const person2 = Number(prompt('How much did person 2 pay?'));

const person3 = Number(prompt('How much did person 3 pay?'));

const billSplit = billTotal / 3;

if (person1 > billSplit) {
    const overpay = person1 - billSplit;
    console.log('Person 2 owes $', overpay);
} else if (person2 > billSplit) {
    const overpay = person2 - billSplit;
    console.log('Person 1 owes $', overpay);
} else if (person3 > billSplit) {
    const overpay = person3 - billSplit;
    console.log('Person 2 owes $', overpay);
}