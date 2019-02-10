package run.openwolf.newIo;

import java.util.Map.Entry;
import java.util.Properties;
import java.util.Set;

public class Demo6 {
	public static void main(String[] args) {
		Properties prop = new Properties();
		
		prop.put("001", "aaa");
		prop.put("002", "bbb");
		prop.put("003", "ccc");
		
		//	获取keys，遍历key获取val
		Set<Object> keys = prop.keySet();
		for (Object key : keys) {
			Object val = prop.get(key);
			System.out.println(key + "=" + val);
		}
		System.out.println("------");
		
		//	获取每对属性
		Set<Entry<Object, Object>> entrys = prop.entrySet();
		for (Entry<Object, Object> entry : entrys) {
			System.out.println(entry.getKey() + "=" + entry.getValue());
		}
	}
}
