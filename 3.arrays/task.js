function compareArrays(arr1, arr2) {
  let result = arr1.every((number, idx) => number === arr2[idx]) && arr1.length === arr2.length;
  
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter((number) => number >= 0).filter((number) => number % 3 == 0).map((number) => number * 10);

  return resultArr; 
}
