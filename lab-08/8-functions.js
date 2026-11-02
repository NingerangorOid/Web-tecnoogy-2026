"use strict";
// 8.1: Only existing own properties are selected, including 0, false and undefined.
function pickPropArray(array, property) {
  return array.filter(item => item !== null && typeof item === 'object' &&
    Object.prototype.hasOwnProperty.call(item, property)).map(item => item[property]);
}

// 8.2: Each closure has its own private count.
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    console.log(count);
    return count;
  };
}

// 8.3: Preserve whitespace; reverse words with five or more Unicode characters.
function spinWords(text) {
  return text.replace(/\S+/gu, word => {
    const characters = Array.from(word);
    return characters.length >= 5 ? characters.reverse().join('') : word;
  });
}

// 8.4*: Search in O(n) time; the same array element is never reused.
function twoSum(nums, target) {
  const seen = new Map();
  for (let index = 0; index < nums.length; index += 1) {
    const missing = target - nums[index];
    if (seen.has(missing)) return [seen.get(missing), index];
    seen.set(nums[index], index);
  }
  return [];
}

// 8.5*: Literal interpretation of "prefix"; minimum length is two letters.
function longestCommonPrefix(strings) {
  if (strings.length === 0) return '';
  let common = Array.from(strings[0]);
  for (const text of strings.slice(1)) {
    const chars = Array.from(text);
    let index = 0;
    while (index < common.length && common[index] === chars[index]) index += 1;
    common = common.slice(0, index);
  }
  return common.length >= 2 ? common.join('') : '';
}

// The assignment's "цветок, поток, хлопок -> ок" example actually asks for a suffix.
function longestCommonSuffix(strings) {
  const reversed = strings.map(text => Array.from(text).reverse().join(''));
  return Array.from(longestCommonPrefix(reversed)).reverse().join('');
}
