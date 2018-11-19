package run.openwolf.accessAriable;

public class Base {
	private int num = 0;
	public void add(int n) {
		if( n < 0) {
			System.out.println("请输入一个正整数");
		}else {
			this.num = this.num + n;
		}
	}
	public int showNum() {
		return this.num;
	}
	public static void main(String[] args) {
		Base a = new Base();
		System.out.println(a.num);
		a.num = 100;
		System.out.println(a.num);
	}
}
