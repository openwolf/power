package run.openwolf.stringdemo;

public class StringTest {
	public static void main(String[] args) {
//		char[] array = "hello world".toCharArray();
//		System.out.println(array[0]);
		String s0 = "                                hello  ";
		System.out.println(s0.trim());
		String s1 = "aa-bb-cc-dd-ee-ff-gg-hh";
		String[] s2 = s1.split("-");
		for(int i=0;i<s2.length;i++) {
			System.out.print(s2[i] + " ");
		}
	}
}
