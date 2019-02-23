package run.openwolf.accessClass;

public class Demo0 {
	public AAA a(String s) {
		class BBB implements AAA{
			private String name;
			@Override
			public void b() {
				// TODO Auto-generated method stub
				System.out.println(name);
			}
			private BBB(String s) {
				name = s;
			}
		}
		return new BBB(s);
	}
	public static void main(String[] args) {
		Demo0 d = new Demo0();
		AAA a = d.a("111");
		a.b();
	}
}
interface AAA{
	void b();
}