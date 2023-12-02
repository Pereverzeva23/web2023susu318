"use strict";
function fioToName(fio) {
const names = fio.split(' ');
return `${names[1]} ${names[0]}`;
}

function filterUnique(array) {
return Array.from(new Set(array));
}

function calculateSalaryDifference(array) {
const minSalary = Math.min(...array);
const maxSalary = Math.max(...array);
return maxSalary / minSalary;
}

class Dictionary {
constructor() {
this.words = new Map();
}

addWord(word, definition) {
if (typeof word === 'string' && typeof definition === 'string') {
this.words.set(word, definition);
}
}

getWord(word) {
return this.words.get(word);
}

getAllWords() {
return Array.from(this.words.keys());
}
}

module.exports = {
fioToName,
filterUnique,
Dictionary,
calculateSalaryDifference
};
