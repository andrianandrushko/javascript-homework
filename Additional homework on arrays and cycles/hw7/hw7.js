let arr = [
    5,
    'hello',
    true,
    10,
    'world',
    false,
    42,
    'javascript',
    true,
    0
];
for (let item of arr) {
    if (typeof item === 'boolean') {
        console.log(item);
    }
}