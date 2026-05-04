const data = (text, count) => {
    for (let i = 0; i < count; i++) {
        document.write(`<ul><li>${text}</li></ul>`);
    }
}

data('hello world', 50);