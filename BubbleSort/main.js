let numbers = [4,5,1,8,9,2];
var swapStatus = false;
console.log(numbers);
bubbleSort();

function bubbleSort() {
  for(var i = 0; i < numbers.length - 1; ++i){
    if(numbers[i] > numbers[i+1]){
      swap(i,i+1);
      console.log(numbers);
    }
  }
  if(swapStatus === true){
    swapStatus = false;
    bubbleSort(numbers);
  }
  return;
}

function swap(leftIndex, rightIndex){
  let temp = numbers[leftIndex];

  numbers[leftIndex] = numbers[rightIndex];
  numbers[rightIndex] = temp;
  swapStatus = true;
}
