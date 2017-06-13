let numbers = [4,5,1,8,9,2];
var swapStatus = false;
console.log(bubbleSort(numbers));

function bubbleSort(list) {
  for(var i = 0; i < list.length - 1; ++i){
    if(list[i] > list[i+1]){
      swap(i,i+1);
    }
  }
  if(swapStatus === true){
    swapStatus = false;
    bubbleSort(list);
  }
  return list;
}

function swap(leftIndex, rightIndex){
  let temp = numbers[leftIndex];

  numbers[leftIndex] = numbers[rightIndex];
  numbers[rightIndex] = temp;
  swapStatus = true;
}
