package run.openwolf.collection;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Demo7 {
	public static void main(String[] args) {
		Map<String,String> map = new HashMap<String,String>();
		map.put("001", "aaa");
		map.put("002", "aaa");
		map.put("003", "ccc");
		map.put("004", "ddd");
		map.put("005", "eee");
		Set<String> keys = map.keySet();
		for(String key : keys) {
			String value = map.get(key);
			System.out.println("key: " + key + ",value: " + value);
		}
	}
}
