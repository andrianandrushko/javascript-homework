let arr = [
    {cardSuit: 'spade', value: '6'},
    {cardSuit: 'diamond', value: '7'},
    {cardSuit: 'heart', value: '8'},
    {cardSuit: 'clubs', value: '9'},
    {cardSuit: 'spade', value: '10'}
];

let result = arr.reduce((acc, card) => {

    acc[card.cardSuit].push(card);

    return acc;

}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

console.log(result);