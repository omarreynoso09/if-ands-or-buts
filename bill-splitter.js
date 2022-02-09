

const prompt = require('prompt-sync')();



const person1 = Number(prompt('How much did person 1 pay?'));

const person2 = Number(prompt('How much did person 2 pay?'));

const billTotal = person1 + person2;

const billSplit = billTotal / 2;

if (person1 > billSplit) {
    const overpay = person1 - billSplit;
    console.log('Person 2 owes $', overpay);
} else if (person2 > billSplit) {
    const overpay = person2 - billSplit;
    console.log('Person 1 owes $', overpay);
}