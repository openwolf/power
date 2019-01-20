package run.openwolf.string;

public class String_01 {
	public static void main(String[] args) {
		String s0 = new String("hello");
		String s1 = "hello";
		System.out.println(s0.equals(s1));
		String s2 = "学号\t\t\t姓名\t年龄";
		String s3 = "长长长长长长长长长长\t姓名\t年龄";
		System.out.println(s2);
		System.out.println(s3);
	}
}
