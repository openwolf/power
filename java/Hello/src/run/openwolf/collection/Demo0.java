package run.openwolf.collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class Demo0 {
	public static void main(String[] args) {
		Collection c = new ArrayList();
		c.add("hello");
		c.add(" ");
		c.add("world");
		c.add(" ");
		c.add("java");
		Iterator it = c.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}
}
