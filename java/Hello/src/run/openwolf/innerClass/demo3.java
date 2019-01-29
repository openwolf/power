package run.openwolf.innerClass;

public class demo3 {
	public static void show(People o) {
		o.eat();
	}
	public static void main(String[] args) {
		show(
				new People() {
					@Override
					public void eat() {
						System.out.println("吃老乡鸡");
					}
				}
		);
	}
}
interface People{
	public abstract void eat();
}