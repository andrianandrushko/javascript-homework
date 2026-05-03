function data(text){
    for (let i = 0; i < 3; i++){
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
data('hello world');