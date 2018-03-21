console.log("This is the first 60 Fibonacci numbers:");
console.log("0");
console.log("1");
let curNum = 1;
let prevNum = 1;
let nextNum;
for (let i=1;i<59;i++){
    console.log(curNum);
    nextNum = curNum + prevNum;
    prevNum = curNum;
    curNum = nextNum;
}