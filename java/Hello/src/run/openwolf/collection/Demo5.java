package run.openwolf.collection;

import java.util.HashMap;
import java.util.Map;

public class Demo5 {
	public static void main(String[] args) {
		Map<String,String> map = new HashMap<String,String>();
		System.out.println(map.put("001", "aaa"));
		System.out.println(map.put("002", "bbb"));
		System.out.println(map.put("003", "ccc"));
		System.out.println(map.put("004", "ddd"));
		System.out.println(map.put("005", "eee"));
		System.out.println(map.put("001", "java"));
		System.out.println(map);
		System.out.println("------------");
		System.out.println(map.size());
		System.out.println(map.get("006"));
		System.out.println("------------");
		System.out.println(map.containsKey("001"));
		System.out.println(map.containsValue("java"));
		System.out.println("------------");
		System.out.println(map.isEmpty());
		map.clear();
		System.out.println(map.isEmpty());
		System.out.println(map);
	}
}
