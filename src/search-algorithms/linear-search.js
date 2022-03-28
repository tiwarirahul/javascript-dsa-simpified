const arr = [2, 3, 5, 18, 29, 12];
const target = 19;

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};

console.log(linearSearch(arr,target));
