function usercopy(obj) {

    if (obj === null ,obj === undefined, Number.isNaN(obj) || typeof obj !== 'object') {
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = usercopy(obj[key]);
    }
    return copy;
}

let user = {
    name: 'vasya',
    age: 30,
    testNull: null,
    testUndefined: undefined,
    testNaN: NaN
};

let clonedUser = usercopy(user);
console.log(clonedUser);