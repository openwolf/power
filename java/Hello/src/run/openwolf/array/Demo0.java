package run.openwolf.array;

import java.util.Arrays;

public class Demo0 {
	public static void main(String[] args) {
		char[] c = new char[4];
		System.out.println(Arrays.toString(c));
		boolean[] b = new boolean[4];
		System.out.println(Arrays.toString(b));
		
		A[] a = {new A(),new A(),new A(),new A()};
		A[] aa;
		aa = new A[]{new A(),new A(),};
		System.out.println(Arrays.toString(a));
		System.out.println(Arrays.toString(aa));
	}
}
class A{
	public String toString() {
		return "a";
	}
}
