
function func1(arr) {
  if (arr.length === 0) return 1;

  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) minIndex = i;
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }

  let start = Math.min(minIndex, maxIndex);
  let end = Math.max(minIndex, maxIndex);

  if (end - start <= 1) return 1;

  let product = 1;
  for (let i = start + 1; i < end; i++) {
    product *= arr[i];
  }
  return product;
}

function func2(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let minEven = null;
    for (let j = 0; j < row.length; j++) {
      let elem = row[j];
      if (elem % 2 === 0) {
        if (minEven === null || elem < minEven) {
          minEven = elem;
        }
      }
    }
    if (minEven !== null) {
      result.push(minEven);
    }
  }
  return result;
}

let arr = [3.5, 1.2, 8.9, 4.1, 0.5, 7.3];
console.log("Одномерный массив: " + arr);
console.log("Произведение между макс и мин: " + func1(arr));

let matrix = [
  [2, 5, 8, 3],
  [1, 4, 6, 7],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
console.log("Матрица:");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
}
console.log("Минимальные чётные в строках: " + func2(matrix));
