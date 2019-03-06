package run.openwolf.io;

import java.util.Arrays;

public class Base {
	//	byte char String
	public static void main(String[] args) {
		String mString = "马";
		byte[] bytes = mString.getBytes();
		System.out.println(Arrays.toString(bytes));
		String mString1 = new String(bytes);
		System.out.println(mString1);
		
		String intStr = "0";
		int intVal = Integer.parseInt(intStr);
		System.out.println(intVal);
	}
}
