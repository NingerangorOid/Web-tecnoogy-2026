"use strict";
const students = [{name:'Павел',age:20},{name:'Иван',age:20},{name:'Эдем',age:20},{name:'Денис',age:20},{name:'Виктория',age:20},{age:40}];
const examples = {
  'pickPropArray': pickPropArray(students, 'name'),
  'spinWords': spinWords('Привет от Legacy'),
  'twoSum': twoSum([2, 7, 11, 15], 9),
  'Префикс (по определению)': longestCommonPrefix(['цветок', 'поток', 'хлопок']),
  'Суффикс (по примеру)': longestCommonSuffix(['цветок', 'поток', 'хлопок'])
};
document.getElementById('results').textContent = JSON.stringify(examples, null, 2);
console.log(examples);
const counter1 = createCounter();
const counter2 = createCounter();
document.getElementById('counter-1').addEventListener('click', () => {
  document.getElementById('count-1').textContent = counter1();
});
document.getElementById('counter-2').addEventListener('click', () => {
  document.getElementById('count-2').textContent = counter2();
});
document.getElementById('words-form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('words-result').textContent = spinWords(document.getElementById('words').value);
});
