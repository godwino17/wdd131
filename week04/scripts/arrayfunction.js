// Array .filter method

let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];

let namesB = names.filter(name => name.charAt(0) == "B");
console.log(namesB); // Output: ["Blessing", "Bob"]

numbers = [1, 2, 3, 4, 5, 6];
evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)