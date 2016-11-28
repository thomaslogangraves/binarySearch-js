let binarySearchRec = function(dataSet, key, low, high) {
  if(low > high) {
    return -1
  }
  let mid = (low + Math.floor((high - low) / 2));
  if(dataSet[mid] === key) {
    return mid;
  } else if(key < dataSet[mid]) {
    return binarySearch(dataSet, key, low, (mid - 1));
  } else {
    return binarySearch(dataSet, key, (mid + 1), high);
  }
};

let binarySearch = function(a, key) {
  binarySearchRec(dataSet, key, 0, (dataSet.length - 1));
};
