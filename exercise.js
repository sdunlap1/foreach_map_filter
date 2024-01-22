//forEach
function doubleValues(arr) {
  let dblArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return dblArr;
}

function onlyEvenValues(arr) {
  let evenArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      evenArr.push(val);
    }
  });
  return evenArr;
}

function showFirstAndLast(arr) {
  let firstLastArr = [];
  arr.forEach(function (val) {
    firstLastArr.push(val[0] + val[val.length - 1]);
  });
  return firstLastArr;
}

function addKeyAndValue(arr, key, value) {
  let keyAndValue = [];
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  let theCount = {};
  const vowels = "aeiouy";
  let inputStr = str.split("");

  inputStr.forEach(function (char) {
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
      if (theCount[lowerCase]) {
        theCount[lowerCase] += 1;
      } else {
        theCount[lowerCase] = 1;
      }
    }
  });
  return theCount;
}

//Map
function doubleValuesWithMap(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (nums, idx) {
    return nums * idx;
  });
}

function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

function extractFullName(arr, key) {
  return arr.map(function(val){
    return val['first'] + ' ' + val['last'];
  });
}

//Filter
function filterByValue(arr, key) {
  return arr.filter(function(val) {
    return key in val;
  });
}

function find(arr, value) {
  return arr.filter(function(val){
    return val === value;
  })[0];
  }

  