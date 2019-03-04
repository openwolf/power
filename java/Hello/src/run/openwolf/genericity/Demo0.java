package run.openwolf.genericity;

public class Demo0<T> {
	private T a;
	public Demo0() {
		
	}
	public Demo0(T t) {
		a = t;
	}
	public T get() {
		return a;
	}
	public static void main(String[] args) {
		Demo0<Phone> a = new Demo0<Phone>(new Phone("15950588906"));
		Phone p = a.get();
		System.out.println(p.getNum());
	}
}
class Phone {
	private String num = "";
	public Phone() {
		
	}
	public Phone(String num) {
		this.num = num;
	}
	public String getNum() {
		return num;
	}
}