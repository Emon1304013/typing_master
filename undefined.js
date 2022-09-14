const personsAge = [23,24,25,26,27];
delete personsAge[1];
console.log(personsAge[1]);
console.log(personsAge); //[ 23, <1 empty item>, 25, 26, 27 ]

//Here in line 2 we have deleted the second value which returns undefined in line 3.
// Also creates a hole in the array. (Line:4)