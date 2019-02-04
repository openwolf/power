package run.openwolf.collection;

import java.util.ArrayList;
import java.util.List;

public class Demo3 {
	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		list.add(0, "!");
		list.add(0, "world");
		list.add(0, "hello");
		System.out.println(list);	//	[hello, world, !]
		System.out.println(list.remove(2));	//	!
		System.out.println(list);	//	[hello, world]
		System.out.println(list.set(0,"!"));	//	hello
		System.out.println(list);	//	[!, world]
	}
}
