function isPalindrome(x: number): boolean {
  let numberArr = x.toString().split("");

  while (numberArr.length > 0) {
    const start = numberArr.shift();
    if (start === "-" || start !== numberArr.pop()) {
      return false;
    }
  }
  return true;
}
