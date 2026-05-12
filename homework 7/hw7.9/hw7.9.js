let users = [
    {id: 1, name: 'Andriy', age: 18},
    {id: 2, name: 'Oleg', age: 25},
    {id: 3, name: 'Max', age: 30},
    {id: 4, name: 'Ivan', age: 22},
    {id: 5, name: 'Anna', age: 19}
];


Array.prototype.myForEach = function (callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }

};

Array.prototype.myFilter = function (callback) {

    let result = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }

    }

    return result;
};


users.myForEach(function(user) {
    console.log(user.name);
});


let adults = users.myFilter(function(user) {
    return user.age >= 10;
});

console.log(adults);