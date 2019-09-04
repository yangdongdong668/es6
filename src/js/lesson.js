function test(){
    for(let i=1;i<3;i++){
        console.log(i);
    }
  //  console.log(i);//这里会i is not defined,用let定义的变量只在块作用域中有效，直接一点就是一个大括号就是一个作用域
}

test();

//1.let只在块作用域中有效；
//2.let不能多次定义相同的变量；

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
