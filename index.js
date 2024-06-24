// Step 1: Created an array with at 5 strings
let arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log('Initial array:', arr);

// Step 2: Added an element to the end of the array
arr.push('fig');
console.log('After adding an element:', arr);

// Step 3: Removed the third element
arr.splice(2, 1);
console.log('After removing the third element:', arr);

// Step 4: Created a string from the elements and comma separate them
let str = arr.join(', ');
console.log('Comma separated string:', str);