'use strict';

const first = function (txt) {
    return txt.charAt(0);
}

const last = function (txt) {
    return txt.charAt(txt.length - 1);
}

const middle = function (txt) {
    return txt.substring(1, txt.length - 1);
}

let text = prompt('Indtast Tekst');

let isPalindromic = function(str) {
  if(str.length <= 1) {
    return true;
  };
  return first(str) === last(str) && isPalindromic(middle(str));
};

console.log(isPalindromic(text));
