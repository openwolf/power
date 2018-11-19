package run.openwolf.accessAriable;

public class UseBase {
	public static void main(String[] args) {
		Base a = new Base();
		System.out.println(a.showNum());
		a.add(10);
		System.out.println(a.showNum());
	}
}
