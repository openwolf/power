package run.openwolf.myRecurrence;

public class Demo0 {
	public static void main(String[] args) {
		int result = method0(5);
		System.out.println(result);
	}
	public static int method0(int n) {
		if(n == 1) {
			return 1;
		}
		return n * method0(n-1);
	}
}
