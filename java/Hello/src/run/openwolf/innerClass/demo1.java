package run.openwolf.innerClass;

public class demo1 {
	public static void main(String[] args) {
		new Outer2().fn();
	}
}

class Outer2{
	public void fn() {
		class Inner{
			public void show() {
				System.out.println("局部内部类");
			}
		}
		Inner i = new Inner();
		i.show();
	}
}