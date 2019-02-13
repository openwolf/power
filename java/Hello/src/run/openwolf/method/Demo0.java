package run.openwolf.method;

public class Demo0 {
	public void method(String a, int b) {
		System.out.println("String,int");
	}
	public void method(int b,String a) {
		System.out.println("int,String");
	}
	public static void main(String[] args) {
		Demo0 a = new Demo0();
		a.method(11, "aaa");
		a.method("bbb", 111);
	}
}
