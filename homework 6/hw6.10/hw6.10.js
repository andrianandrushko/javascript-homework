let cards = {
    cardSuit: ['spade', 'diamond', 'heart', 'clubs'],
    nameValue: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
};

let arr = [];

for (let suit of cards.cardSuit) {
    for (let name of cards.nameValue) {

        let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';

        arr.push({value: name, cardSuit: suit, color: color});
    }
}

console.log(arr);


console.log(arr.filter(card => card.value === 'ace'));

console.log(arr.filter(card => card.value === '6'));

console.log(arr.filter(card => card.color === 'red'));

console.log(arr.filter(card => card.cardSuit === 'diamond'));

console.log(arr.filter(card => card.value === '9'));