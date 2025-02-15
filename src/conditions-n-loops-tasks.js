/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isTriangle = a + b > c && b + c > a && c + a > b;
  const hasTwoEqualSides = a === b || a === c || b === c;
  return isTriangle && hasTwoEqualSides;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let n = num;
  const dec = Math.floor(n / 10);
  n %= 10;
  for (let i = 0; i < dec; i += 1) {
    result += 'X';
  }
  if (n === 9) {
    result += 'IX';
    n %= 9;
  } else if (n >= 5) {
    const pent = Math.floor(n / 5);
    n %= 5;
    for (let i = 0; i < pent; i += 1) {
      result += 'V';
    }
  }
  if (n === 4) {
    result += 'IV';
  } else {
    for (let i = 0; i < n; i += 1) {
      result += 'I';
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const dict = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (true) {
      case /[\d]/.test(numberStr[i]):
        res += dict[numberStr[i] * 1];
        break;
      case /[-]/.test(numberStr[i]):
        res += 'minus';
        break;
      case /[,.]/.test(numberStr[i]):
        res += 'point';
        break;
      default:
        break;
    }
    res += i === numberStr.length - 1 ? '' : ' ';
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let i = 0;
  while (i < Math.floor(str.length / 2)) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
    i += 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let i = 0;
  while (i < str.length) {
    if (letter === str[i]) {
      return i;
    }
    i += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n > 0) {
    const d = n % 10;
    if (d === digit) return true;
    n = Math.floor(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const l = arr.length;
  if (l < 3) return -1;
  function sum(istart, iend) {
    let s = 0;
    for (let i = istart; i <= iend; i += 1) {
      s += arr[i];
    }
    return s;
  }
  let i = 1;
  while (i < l - 1) {
    if (sum(0, i - 1) === sum(i + 1, l - 1)) {
      return i;
    }
    i += 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const maxRange = size * size;
  let newMatr = [];
  for (let row = 0; row < size; row += 1) {
    let r = [];
    for (let col = 0; col < size; col += 1) {
      const c = 0;
      r = [...r, c];
    }
    newMatr = [...newMatr, r];
  }
  let cycleLength = size - 1;
  let cycleMin = 0;
  let n = 1;
  let i = cycleMin;
  let j = cycleMin;
  let cyclecounter = 0;
  while (n <= maxRange && cyclecounter <= 25) {
    if (n === maxRange) {
      newMatr[i][j] = n;
      break;
    }
    while (j < cycleLength) {
      newMatr[i][j] = n;
      n += 1;
      j += 1;
    }
    while (i < cycleLength) {
      newMatr[i][j] = n;
      n += 1;
      i += 1;
    }
    while (j > cycleMin) {
      newMatr[i][j] = n;
      n += 1;
      j -= 1;
    }
    while (i > cycleMin) {
      newMatr[i][j] = n;
      n += 1;
      i -= 1;
    }
    cycleLength -= 1;
    cycleMin += 1;
    i = cycleMin;
    j = cycleMin;
    cyclecounter += 1;
  }
  return newMatr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matr = matrix;
  const dim = matrix.length;
  for (let lyr = 0; lyr < Math.floor(dim / 2); lyr += 1) {
    for (let colIndex = lyr; colIndex < dim - lyr - 1; colIndex += 1) {
      let rowIndex = lyr;
      let tmp = matrix[rowIndex][colIndex];
      for (let i = 1; i <= 4; i += 1) {
        const colReplaced = dim - rowIndex - 1;
        const rowReplaced = colIndex;
        const buff = matr[rowReplaced][colReplaced];
        matr[rowReplaced][colReplaced] = tmp;
        colIndex = colReplaced;
        rowIndex = rowReplaced;
        tmp = buff;
      }
    }
  }
  return matr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr) {
  function sortRange(array, minIndex, maxIndex) {
    const arrayToSort = array;
    let leftIndex = minIndex;
    let rightIndex = maxIndex - 1;
    const pivot = arrayToSort[maxIndex];
    function swapElements(i, j) {
      const temp = arrayToSort[i];
      arrayToSort[i] = arrayToSort[j];
      arrayToSort[j] = temp;
    }
    if (minIndex >= maxIndex) {
      return;
    }
    while (leftIndex <= rightIndex) {
      while (leftIndex <= rightIndex && arrayToSort[leftIndex] <= pivot) {
        leftIndex += 1;
      }
      while (leftIndex <= rightIndex && arrayToSort[rightIndex] >= pivot) {
        rightIndex -= 1;
      }
      if (leftIndex < rightIndex) {
        swapElements(leftIndex, rightIndex);
      }
    }
    swapElements(leftIndex, maxIndex);
    sortRange(arrayToSort, minIndex, leftIndex - 1);
    sortRange(arrayToSort, leftIndex + 1, maxIndex);
  }
  sortRange(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newstr = str;
  let j = 1;
  function shuffle(s) {
    let newstrLeft = '';
    let newstrRight = '';
    for (let i = 0; i < s.length - 1; i += 2) {
      newstrLeft += s[i];
      newstrRight += s[i + 1];
    }
    if (s.length % 2 !== 0) newstrLeft += s[s.length - 1];
    return newstrLeft + newstrRight;
  }
  while (j <= iterations) {
    newstr = shuffle(newstr);
    if (str === newstr) {
      for (let k = 0; k < iterations % j; k += 1) {
        newstr = shuffle(newstr);
      }
      return newstr;
    }
    j += 1;
  }
  return newstr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const tail = [];
  let n = number;
  let dig = n % 10;
  n = Math.floor(n / 10);
  tail.push(dig);
  while (n && n % 10 >= dig) {
    dig = n % 10;
    tail.push(dig);
    n = Math.floor(n / 10);
  }
  if (n === 0) return number;
  const digToSwap = n % 10;
  n = Math.floor(n / 10);
  let i = 0;
  while (digToSwap >= tail[i]) {
    i += 1;
  }
  const temp = tail[i];
  tail[i] = digToSwap;
  n = n * 10 + temp;
  for (let j = 0; j < tail.length; j += 1) {
    n = n * 10 + tail[j];
  }
  return n;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
