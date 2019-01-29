package run.openwolf.innerClass;

public class demo2 {
	public static void main(String[] args) {
		Outer3 o = new Outer3();
		o.fn();
	}
}

interface Inner2 {
	public void fn();
}
class Outer3{
	public void fn() {
		new Inner2() {

			@Override
			public void fn() {
				System.out.println("秀");
			}			
		}.fn();
		
		Inner2 i = new Inner2() {

			@Override
			public void fn() {
				System.out.println("又秀了一次");
			}
			
		};
		i.fn();
	}
}