package run.openwolf.innerClass;

public class Demo4 {
	public int a = 1;
	public void b() {
		System.out.println("Demo4.b()");
	}
	public void setA(int n) {
		a = n;
	}
	public Inner getInner() {
		return new Inner();
	}
	class Inner{
		public int a = 2;
		public void b() {
			System.out.println("Inner.b()");
		}
		public void c(){
			System.out.println(Demo4.this.a);
			Demo4.this.b();
			System.out.println(a);
			b();
		}
	}
	public static void main(String[] args) {
		Demo4 a = new Demo4();
		Inner b = a.getInner();
		a.setA(9);
		b.c();
	}
	
}
