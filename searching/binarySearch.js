function binarySearch2(arry, n) {
    start = 0;
    end = arry.length - 1;
    middle = Math.floor(start + end / 2);
    while (arry[middle] !== n && middle < end && middle > start) {
      if (n > arry[middle]) start = middle + 1;
      else end = middle - 1;
  
      middle = Math.floor((start + end) / 2);
    }
    return arry[middle] === n ? middle : -1;
  }
  
  console.log(binarySearch2([0, 1, 2, 3, 4, 5, 9], 0));
  
  console.log(binarySearch2([10, 15, 20, 25, 30, 33, 45, 77, 88, 99, 100, 101]