let users = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;


while (i < users.length){
    let user = users[i];
    console.log(user);
    i++;
}


for (let i = 0; i < users.length; i++){
    console.log('data');
}


while (i < users.length){
    if (i % 2 !== 0) {
        console.log(users[i]);
    }
    i++;
}


for (let i = 0; i < users.length; i++){
    if (i % 2 !== 0) {
        console.log(users[i]);
    }
}


while (i < users.length){
    if (i % 2 === 0){
        console.log(users[i]);
    }
    i++;
}


for (let i = 0; i < users.length; i++){
    if (i % 2 === 0){
        console.log(users[i]);
    }
}


while (i < users.length){
    if (users[i] % 3 === 0){
        console.log('okten');
    }
    i++;
}


users.reverse()
console.log(users);


let i = users.length - 1;
while (i >= 0 ){
    console.log(users[i]);
    i--;
}

for (let i = users.length -1; i >= 0 ; i--){
    console.log(users[i]);
}

let i = users.length - 1;
while (i >= 0){
    if (i % 2 !== 0){
        console.log(users[i]);
    }
    i--;
}


for (let i = users.length -1; i >= 0; i--){
    if (i % 2 !== 0){
        console.log(users[i]);
    }
}

let i = users.length - 1;
while( i >= 0){
    if (users[i] % 2 === 0){
        console.log(users[i]);
    }
    i--;
}


for (let i = users.length -1; i >= 0; i--){
    if (users[i] % 2 === 0){
        console.log(users[i]);
    }
}

for( let i = users.length -1; i >= 0; i--){
    if (users[i] % 3 === 0){
        users[i]= 'okten';
    }
}
console.log(users);