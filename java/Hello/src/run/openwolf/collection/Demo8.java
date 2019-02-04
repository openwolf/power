package run.openwolf.collection;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class Demo8 {
	public static void main(String[] args) {
		Map<String,String> map = new HashMap<String,String>();
		map.put("001", "aaa");
		map.put("002", "aaa");
		map.put("003", "ccc");
		map.put("004", "ddd");
		map.put("005", "eee");
		Set<Map.Entry<String, String>> entrys = map.entrySet();
		for (Entry<String, String> entry : entrys) {
			System.out.println("key: " + entry.getKey() + ",value: " + entry.getValue());
		}
	}
}
