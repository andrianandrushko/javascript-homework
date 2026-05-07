let reduce = arr.reduce((accumulator, user) => {

    if (user.cardSuit === 'spade') {
        accumulator.spades.push(user);
    }

    if (user.cardSuit === 'diamond') {
        accumulator.diamond.push(user);
    }

    if (user.cardSuit === 'heart') {
        accumulator.heart.push(user);
    }

    if (user.cardSuit === 'clubs') {
        accumulator.club.push(user);
    }

    return accumulator;

}, {spades: [], diamond: [], heart: [], club: []});

console.log(reduce);