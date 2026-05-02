let numbers =[];


for (let i = 1; i < 50; i++){
    if (i % 2 !== 1){
        console.log(i);
    }
}


let numbers =[];
for (let i = 1; i < 50; i++){
    if (i % 2 === 1){
        console.log(i);
    }
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = [];

for (let i = 0; i < 20; i++) {
    numbers.push(getRandom(1, 50));
}

console.log(numbers);



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = [];

for (let i = 0; i < 20; i++) {
    numbers.push(getRandom(8, 732));
}
console.log(numbers);



for (let i = 1; i <= 20; i+= 3){
    console.log(i);
}


for (let i = 1; i <= 50; i+= 3){
    if (i % 2 !== 1){
        console.log(i);
    }
}


for (let i = 1; i <= 50; i+= 3){
    if (i % 2 === 1){
        console.log(i);
    }
}


let numbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 1){
        console.log(numbers[i]);
    }
}


let numbers = [100,250,50,168,120,345,188];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i]+ 3 / 7){
        console.log(1221 / 7);
    }
}


let data = [10, "hello", true, 3.14, false, "JS", 42, null, "world", 7];
let numbers = [];

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
        numbers.push(data[i]);
    }
}

console.log(numbers);