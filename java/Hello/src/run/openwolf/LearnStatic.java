package run.openwolf;

public class LearnStatic {
	static byte num = 6;
	byte variable = 7;
	public static void staticMethod_0() {
		System.out.println("静态属性num值为"+LearnStatic.num);
		LearnStatic obj = new LearnStatic();
		System.out.println("实例属性variable的值为"+obj.variable);
		obj.instanceMethod();
		System.out.println("我也可以使用静态方法");
		LearnStatic.staticMethod_1(9);
	}
	public static void staticMethod_1(int a) {
		System.out.println("传入了"+a);
	}
	public void instanceMethod() {
		System.out.println("我也能用LearnStatic的属性和方法");
		System.out.println("LearnStatic.num:"+LearnStatic.num);
		LearnStatic.staticMethod_1(8);
	}
	public static void  main(String[] args) {
		LearnStatic.staticMethod_0();
	}
}
