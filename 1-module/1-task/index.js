function factorial(n) {
  // ваш код...
  let res = 1;
  for (let i = 2; i <= n; i++) {res *= i;}
  return res;   
}