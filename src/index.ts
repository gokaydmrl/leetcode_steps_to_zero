var numberOfSteps = function (num: number) {
  let val = 0;

  const divide = (n: number) => {
    if (n === 0) {
      return 0;
    }
    if (n % 2 === 1) {
      const a = n - 1;
      val++;
      if (a === 0) {
        return;
      } else {
        divide(a);
      }
    } else {
      divide(n / 2);
      val++;
    }
  };
  divide(num);
  return val;
};
