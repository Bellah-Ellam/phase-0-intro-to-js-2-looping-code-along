// Code your solutions in this file
const gifters=["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    const cards = []; // initialize an empty array to store the result
  
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return cards; // return the array of cards
  }
  
writeCards(gifters,'surprise');

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }