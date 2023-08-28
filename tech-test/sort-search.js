// sort
const arr = [4, 6, 22, 11, 3, 55, 875, 65];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

// console.log("bubbleSort", bubbleSort(arr));

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
};

// const quickSort = (arr) => {

//   if(arr.length < 2) return arr;

//   // *** lấy phần tử cuối của 'arr' làm 'pivot'
//   const pivotIndex = arr.length - 1;
//   const pivot = arr[pivotIndex];

//   const left = [];
//   const right = [];

//   let currentItem;
//   // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
//   for(let i = 0; i < pivotIndex; i++) {
//       currentItem = arr[i];

//       if(currentItem < pivot) {
//           left.push(currentItem);
//       } else {
//           right.push(currentItem);
//       }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]));

// console.log("quickSort", quickSort(arr));
// Search
const linearSearch = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
};

console.log("linearSearch", linearSearch(arr, 65));

const binarySearch = (arr) => {};

// Find 2nd item in arr

const findArr = (arr) => {
  let first;
  let second;
  if (arr[0] > arr[1]) {
    first = arr[0];
    second = arr[1];
  } else {
    first = arr[1];
    second = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return [first, second];
};

// console.log("findArr", findArr(arr));
