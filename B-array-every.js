/*
   This program should check if the array `group` contains only students
*/

const students = ["Hossein", "Jamal", "Mehdi", "Shaden", "Zaynab", "Niloofar"];
const group = ["Niloofar", "Mehdi", "Benyamin", "Zaynab"];

function test(i, j) {
  return i === j;
}

let groupIsOnlyStudents = test(students, group);

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students