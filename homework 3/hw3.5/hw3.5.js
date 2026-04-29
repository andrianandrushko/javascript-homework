let listOfItems = ["html", "css", "javascript", "mysql", "mongodb", "react", "angular", "node.js"];
for (let item of listOfItems){
    console.log(item);
    document.write('<div><ul><li>${item}</li></ul></div>' );
}