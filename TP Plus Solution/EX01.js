// * 1 ----

let v1 = 10,
  v2 = 20;

[v1, v2] = [v2, v1];

console.log([v1, v2]);

const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];

// * 2 ----
const newArr = [...numbers, ...letters, ...foods];
console.log(newArr); // * Output = [ 1, 2, 3, 'a', 'b', 'c', 'mango', 'pecan pie' ]

// * 3 ----
const name = "Houssam";
const charArray = [...name];
console.log(charArray); // * Output: ['H', 'o', 'u', 's', 's', 'a', 'm']

// * 4 ----

/* a) fn(1,2,3,'A','B','C')
    Ans 
    a = 1
    b = 2
    args = [3,'A','B','C']
*/

/* b) fn(1,2)
    Ans 
    a = 1
    b = 2
    args = []
*/

/* c) fn(...x)
    Ans 
    a = "a"
    b = "b"
    args = [’c’,’d’]
*/
