// Big O of Objects

let instructor = {
  firstName: "kelly",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

console.log(instructor.firstName); // Access - O(1) Time
console.log(delete instructor.firstName); // Removal - O(1) Time
instructor.lastName = "Jhon"; // Insertion - O(1) Time

console.log(Object.keys(instructor)); // Searching - O(N) Time
console.log(Object.values(instructor)); // Searching - O(N) Time
console.log(Object.entries(instructor)) // Searching - O(N) Time
console.log(instructor.hasOwnProperty('isInstructor')); // O(1) Time
