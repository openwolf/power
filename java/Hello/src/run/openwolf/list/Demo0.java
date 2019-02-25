package run.openwolf.list;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Demo0 {
	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(16,17,18,19,20);
		list.set(1,99);
//		list.add(10);Exception in thread "main" java.lang.UnsupportedOperationException
	}
}
