function createNumber(start, end) 
{
  if (start > end) {
    const array = Array.from({ length: start - end + 1 }, (_, index) => start - index);
    return array;
  } else {
    
    const array = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return array;
  }
}


console.log(createNumber(4, 7));

console.log(createNumber(-4, 7));