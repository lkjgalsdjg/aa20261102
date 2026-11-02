// ===================== 函数部分（新增，放最前面） =====================
//【函数声明】方式定义函数
function add(a,b){
    r=a+b;
    console.log("add函数被调用");
    return r; //函数返回值
}
//调用函数
add(1,2);
console.log(add(1,2));
console.log(typeof(add(1,2)));
console.log(typeof(add));

let result = add(1,2);
console.log(result);
console.log(typeof(result));
// console.log(add());

// 【函数表达式】方式定义函数
console.log("函数表达式方式定义函数");
let add2 = function(a,b){
    r=a+b;
    console.log("add函数被调用");
    return r; //函数返回值
}
add2(10,20);
console.log(add2(10,20));
console.log(typeof(add2(10,20)));
console.log(typeof(add2));

// 【箭头函数】 => 简单函数写法
console.log("================");
console.log("箭头函数方式定义函数");
let add3 = function(a,b) {return a+b;}
console.log(add3(100,200));

let add4 = (a,b) => {return a+b;}
console.log(add4(1000,2000));

// ===================== 循环语句 —— while / do while / for =====================
let score2 = 90
if (score2 >= 60) {
    console.log(`If成绩${score2},及格`);
}
// 循环变量：在循环中会重复使用的变量  要有更新
while (score2 >= 60) {
    console.log(`While成绩${score2},及格`);
    score2--;
}
console.log(`While最终成绩${score2}`);

let score3 = 59
do {
    console.log(`Do成绩[不满足条件还是执行一次]${score3},及格`);
    score3--;
} while (score3 >= 60);
console.log(`Do最终成绩${score3}`);

// 循环语句——for语句
for (let i = 0; i < 5; i++) {
    console.log(`For${i}`);
    document.write(`NieWei${i}`);
    document.write("<br>");
}

let i=0// 循环变量要初始化，否则会死循环
while (i < 5) {
    console.log(`While${i}`);
    document.write(`NieWei${i}`);
    document.write("<br>");
    i++;// 循环变量要更新，否则会死循环
}

// ===================== 数组声明 =====================
// 用【字面量】方式声明数组Array 【中括号】
let team = ['张三', '李四', '王五', '赵六'];
console.log(typeof(team));
console.log(team);
let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers));
console.log(numbers);
let elements = ['niewei', 18, true];//三种数据类型
console.log(typeof(elements));
console.log(elements);

//用Array容器/结构 的【构造函数】声明数组
let team2 = new Array();
console.log(typeof(team2));
console.log(team2);

let team3 = new Array('张三', '李四', '王五', '赵六');
console.log(typeof(team3));
console.log(team3);

// ===================== 分支结构：比较、逻辑运算符、if、switch =====================
// 【比较运算符】
// console.log(1 = "1");
console.log(1 == "1"); // 字面量相等
console.log(1 === "1"); // 类型相等
console.log(1 >= 0);
console.log(1 >= 2);

// 【逻辑运算符】
console.log(1 == "1" && 1 >= 0);// 与运算符：都为true才为true，有一个为false就为false
console.log(1 === "1" || 1 >= 2);// 或运算符：有一个为true就为true，都为false才为false
console.log(!(1 == "1"));// 非运算符：取反，true变false，false变true

// 分支结构：条件语句-if语句  判断成绩是否及格
let score = 60
if (score >= 60) {
    console.log(`成绩${score},及格`);
} else {
    console.log(`成绩${score},不及格`);
}

// Swith case 枚举
// let d=new Date().getDay();
let d=3
switch (d)
{
  case 0:x="今天是星期日";
  break;
  case 1:x="今天是星期一";
  break;
  case 2:x="今天是星期二";
  break;
  case 3:x="今天是星期三";
  break;
  case 4:x="今天是星期四";
  break;
  case 5:x="今天是星期五";
  break;
  case 6:x="今天是星期六";
  break;
}
console.log(x);
