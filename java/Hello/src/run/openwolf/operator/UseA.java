package run.openwolf.operator;

public class UseA {
	public static A change(A a) {
		a.name = "bbb";
		a.val = 333;
		return a;
	}
	public static void main(String[] args) {
		A a = new A();
		System.out.println("a.val:"+a.val);
		System.out.println("a.name:"+a.name);
		UseA.change(a);
		System.out.println("a.val:"+a.val);
		System.out.println("a.name:"+a.name);
	}
}
