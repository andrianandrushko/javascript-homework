class Cinderella {
    constructor(id, age, Footsize) {
        this.id = id;
        this.age = age;
        this.Footsize = Footsize;
    }
}

class Prince {
    constructor(id, age, slipper) {
        this.id = id;
        this.age = age;
        this.slipper = slipper;
    }
}
let Princes = [
    new Prince(1, 21, 40)
];
console.log(Princes);



let cinderellas = [
    new Cinderella(1, '22', 38),
    new Cinderella(2, '23', 37),
    new Cinderella(3, '24', 36),
    new Cinderella(4, '21', 35),
    new Cinderella(5, '26', 40),
    new Cinderella(6, '28', 41),
    new Cinderella(7, '25', 42),
    new Cinderella(8, '20', 34),
    new Cinderella(9, '22', 35),
    new Cinderella(10, '22', 38)
];
console.log(cinderellas);

for (const cinderella of cinderellas){
    if (cinderella.footsize === Prince.slipper){
        Prince.girl = cinderella;
    }
}

let chosenCinderella = cinderellas.find(cinderella =>
    cinderella.footsize === Prince.slipper
);

console.log(chosenCinderella);