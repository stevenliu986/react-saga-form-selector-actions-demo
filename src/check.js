/**
 * 递归算法
 * @param n 整数，最大不能大于10000
 * @returns {*|number} 从1到n的和
 */

const num = 100;
const recursion01 = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + recursion01(n - 1);
};
console.log(`1到${num}的和为：`, recursion01(num));

const fibonachi = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
};

const num01 = 10;
console.log(`斐波那契数列第${num01}位的值为：`, fibonachi(num01));
