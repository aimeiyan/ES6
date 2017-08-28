{
    //类的基本定义和生成实例
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    let v_parent=new Parent('v');
    console.log('构造函数和实例',v_parent);
}

{
    //类的继承
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    class Child extends Parent{

    }

    console.log(new Child(),new Child().name);

}

{
    //继承传递参数
    class Parent{
        constructor(name='mukewnag'){
            this.name=name;
        }
    }

    class Child extends Parent{
        constructor(name='child'){
//            super();  //“super”是子类修改父类参数的方法，如果括号中是空值，那么父类中就用参数的默认值
            super(name);  //super完成子类向父类传递参数的一个过程
            this.type='child';  //强调：如果子类还要增加自己的属性，一定要放在super的后面
        }
    }

    console.log(new Child(),new Child().name);
    console.log(new Child('hello'));

}

{
    // getter，setter
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        get longName(){  //这里是给类定义属性，不是函数方法
            return 'mk'+this.name;
        }

        set longName(value){
            this.name=value;
        }
    }

    let v=new Parent();
    console.log("getter", v.longName);

    v.longName="hello";
    console.log("setter", v.longName);

}

{
    //静态方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){   //此处定义的是方法，而不是属性
            console.log("tell");
        }
    }

    Parent.tell();  //静态方法是通过类去调用，而不是通过类的实例去调用

}


{
    //静态属性
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }

    }

    Parent.type="test"; //静态属性：直接在类上定义

    console.log('静态属性',Parent.type);

}