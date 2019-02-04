package run.openwolf.collection;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Demo6 {
	public static void main(String[] args) {
		Map<String,String> map = new HashMap<String,String>();
		map.put("001", "aaa");
		map.put("002", "aaa");
		map.put("003", "ccc");
		map.put("004", "ddd");
		map.put("005", "eee");
		Set<String> keys = map.keySet();
		Collection<String> values = map.values();
		for(String s : keys) {
			System.out.println(s);
		}
		for(String s : values) {
			System.out.println(s);
		}
	}
}
