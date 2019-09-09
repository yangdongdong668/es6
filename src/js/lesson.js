function test(){
    for(let i=1;i<3;i++){
        console.log(i);
    }
  //  console.log(i);//这里会i is not defined,用let定义的变量只在块作用域中有效，直接一点就是一个大括号就是一个作用域
}

test();
var a = [];
for(var i=0;i<10;i++){
    a[i]=function(){
        console.log(i);
    }
}
a[6](); //10
// 上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，
// 变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。
// 也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。

var a = [];
for(let i=0;i<10;i++){
    a[i]=function(){
        console.log(i);
    }
}
a[6]();//6
//上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，
//所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，
//从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，
//就在上一轮循环的基础上进行计算。

for(let i=0;i<3;i++){
    let i = 'abc';
    console.log(i);
}
//abc
//abc
//abc
//for循环比较特殊的一点是，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

//1.let只在块作用域中有效；
//2.let在同一作用域中不能多次定义相同的变量；

const C = 222;
//C = 333;// Error: "C" is read-only
{
    let A = 1,B =2;

    const O = {
        a:A,
        b:B
    }
    O.a = 3;
    console.log(O);
}

//1.const只在块作用域中有效，定义常量，不可变
//2.const定义常量必须赋值，不然会报错
//3.const定义对象时，对象时可以指向对象的内存域，所以对象可以改变的
