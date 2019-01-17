package run.openwolf.list;

import java.util.ArrayList;

public class ArrayListDemo {
	public static void main(String[] args) {
		ArrayList<String> array = new ArrayList<String>();
		array.add("hello");
		array.add(" ");
		array.add("world");
		array.add(" ");
		array.add("!!!");
		array.add(array.size()," ");
		System.out.println("array:"+array);
		System.out.println(array.get(0));
//		array.remove(" ");
//		System.out.println("array:"+array);
		array.remove(array.size()-1);
		System.out.println("array:"+array);
		System.out.println(array.set(4,"???"));
		System.out.println("array:"+array);
	}
}
