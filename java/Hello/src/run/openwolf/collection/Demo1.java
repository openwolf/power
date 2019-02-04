package run.openwolf.collection;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;


public class Demo1 {
	public static void main(String[] args) {
		List l = new ArrayList();
		l.add("1");
		l.add("2");
		l.add("3");
		l.add("4");
		l.add("5");
		ListIterator it = l.listIterator();
		while(it.hasNext()) {
			if(it.next().equals("1")) {
				it.add("666");
			}
		}
		System.out.println(l);
	}
}
