const arr = [2, 3, 5, 18, 29, 32, 34, 40];
//const arr = [92, 83, 75, 68, 59, 42, 34, 20];
const target = 18;

const binarySearch = (arr, target) => {
  if (!arr) {
    return -1;
  } else if (arr.length == 0 || arr[0] === arr[arr.length - 1]) {
    return arr[0] === target ? 0 : -1;
  } else if (arr[0] < arr[arr.length - 1]) {
    return binarySearchIncreasing(arr, target);
  } else if (arr[0] > arr[arr.length - 1]) {
    return binarySearchDecreasing(arr, target);
  }

  return -1;
};

const binarySearchIncreasing = (arr, target) => {
  console.log('binarySearchIncreasing');
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.ceil(start - (start - end) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

// const arr = [92, 83, 75, 68, 59, 42, 34, 20];
const binarySearchDecreasing = (arr, target) => {
  console.log('binarySearchDecreasing');
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.ceil(start - (start - end) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, target));
