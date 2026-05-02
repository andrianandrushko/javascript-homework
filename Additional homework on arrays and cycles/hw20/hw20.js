let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let data = [];

for (let i = 1; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
        data.push(arr[i]);
    }
}

console.log(data);