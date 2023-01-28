const name = "Mario";
const lastName = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastName            // false
age <= average              // true
firstYearCompleted == lastName          // true => I predicted this as true, but then I saw that it's false.
yearsCompleted == firstYearCompleted        // true
firstYearCompleted === yearsCompleted           // false
examsCompleted < age            // true
isGraduated > yearsCompleted            // false

console.log(name ==lastName);
console.log(age <= average);
console.log(firstYearCompleted == lastName);
console.log(yearsCompleted == firstYearCompleted);
console.log(firstYearCompleted === yearsCompleted);
console.log(examsCompleted < age);
console.log(isGraduated > yearsCompleted);

