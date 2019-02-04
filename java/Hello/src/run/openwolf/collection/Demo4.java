package run.openwolf.collection;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Demo4 {
	public static void main(String[] args) {
		Set<String> set = new HashSet<String>();
		set.add("hello");
		set.add("world");
		set.add("!");
		
		//	method0(set);
		
		//	method1(set);
		
		//	method2(set);
		
	}

	public static void method2(Set<String> set) {
		//	增强for
		for(String s : set) {
			System.out.println(s);
		}
	}

	public static void method1(Set<String> set) {
		//	iterator
		Iterator<String> it = set.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}

	public static void method0(Set<String> set) {
		//	转数组
		Object[] array = set.toArray();
		for(int i = 0;i<array.length;i++) {
			System.out.println(array[i]);
		}
	}
}
