package run.openwolf.io;

import java.io.File;
import java.util.Arrays;

public class Demo0 {
	public static void main(String[] args) {
		File path = new File(".");
		String[] list;
		list = path.list();
		System.out.println(list);
		System.out.println(Arrays.toString(list));
	}
}
