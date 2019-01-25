package run.openwolf.block;

public class demo0 {
	public static void main(String[] args) {
		A a = new A();
		A b = new A("aaa");
	}
}

class A{
	{
		System.out.println("这里是重复的代码");
	}
	String name;
	public A() {
		
	}
	public A(String name) {
		this.name = name;
	}
}