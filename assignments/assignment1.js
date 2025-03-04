let str = " My name is eman";

console.log("Original String:", str);
console.log("Length:", str.length);
console.log("Trim:", str.trim());
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Replace 'eman' with 'khan':", str.replace("eman", "khan"));
console.log("Repeat:", str.repeat(2));
console.log("Concat:", str.concat(" and I am a student."));
console.log("Trim Start:", str.trimStart());
console.log("Trim End:", str.trimEnd());
console.log("Character at index 7:", str.charAt(7));
console.log("Index of 'eman':", str.indexOf("eman"));
console.log("Last index of 'm':", str.lastIndexOf("m"));
console.log("Includes 'eman':", str.includes("eman"));
console.log("Starts with 'My':", str.startsWith("My"));
console.log("Ends with 'eman':", str.endsWith("eman"));
console.log("Slice (4, 9):", str.slice(4, 9));
console.log("Substring (4, 9):", str.substring(4, 9));
console.log("Substr (4, 9) (deprecated):", str.substr(4, 9));
console.log("Split by space:", str.split(" "));

// ARRAY METHODS
let arr = ["emaan", "waarda", "Fahad", "zariya"];

console.log("Original Array:", arr);
arr.push("Zardad");
console.log("Push 'Zardad':", arr);
arr.pop();
console.log("Pop last element:", arr);
arr.shift();
console.log("Shift (remove first element):", arr);
arr.unshift("Farzana");
console.log("Unshift 'Farzana':", arr);
arr.splice(2, 0, "Arfa");
console.log("Splice (insert 'Arfa' at index 2):", arr);
arr.splice(1, 2);
console.log("Splice (remove 2 elements from index 1):", arr);

let numArr = [4, 64, 24, 9, 5];
console.log("\nOriginal Number Array:", numArr);
numArr.sort();
console.log("Sort numerically:", numArr);
numArr.reverse();
console.log("Reverse array:", numArr);

console.log("\nArray Searching & Filtering:");
console.log("Includes 'emaan':", arr.includes("emaan"));
console.log("Index of 'emaan':", arr.indexOf("emaan"));
console.log("Find first Name starting with 'F':", arr.find(Name => Name.startsWith("F")));
console.log("Find index of Name starting with 'F':", arr.findIndex(Name => Name.startsWith("O")));
console.log("Filter numbers greater than 4:", numArr.filter(num => num > 4));

console.log("\nMapping & Reducing:");
let newArr = arr.map(Name=> Name.toUpperCase());
console.log("Map (convert to uppercase):", newArr);
let sum = numArr.reduce((total, num) => total + num, 0);
console.log("Reduce (sum of numbers):", sum);

console.log("\nCombining & Splitting:");
let newArray = arr.concat(["Mirall", "Huzaifa"]);
console.log("Concat new array:", newArray);
console.log("Join with ' - ':", newArray.join(" - "));