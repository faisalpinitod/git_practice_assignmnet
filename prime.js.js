var num = 11;
var flag = 0;
for (i = 1; i <= num; i++) {
  if (num % i == 0) {
    flag++;
  }
}
if (flag == 2) {
  console.log("Prime Number");
} else {
  console.log("Not Prime");
}
