package run.openwolf.exceptionDemo;

public class Demo1 {
	public static void main(String[] args) {
		try {
			System.out.println(2/0);
		} catch (Exception e) {
//			System.out.println(e.getMessage());
//			System.out.println(e.toString());
			e.printStackTrace(System.out);
			System.out.println(1);
			System.out.println(2);
		} finally {
			System.out.println(3);
		}
		System.out.println(4);
	}
}
