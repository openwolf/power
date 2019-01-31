package run.openwolf.integerDemo;

public class demo {
	public static void main(String[] args) {
//		method();
		String a = "1231 5";
		boolean flag = a.matches("[^0][0-9]{4,14}");
		System.out.println(flag);
	}

	private static void method() {
		Integer i = new Integer("10");
		int a = i.intValue();
		System.out.println(a);
		int b = Integer.parseInt("20");
		System.out.println(b);
		Integer n = new Integer(10);
		System.out.println(n);
	}
}
