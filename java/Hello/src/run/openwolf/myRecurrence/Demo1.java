package run.openwolf.myRecurrence;

public class Demo1 {
	public static void main(String[] args) {
		int result = method(5);
		System.out.println(result);
	}
	public static int method(int n) {
		if(n <= 0) {
			return 0;
		}
		return (n - 3) + method(n-3);
	}
}
