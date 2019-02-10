package run.openwolf.newIo;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Properties;

public class Demo7 {
	public static void main(String[] args) {
		//	method0();
		//	method1();
		try {
			FileReader fr = new FileReader("prop_list.txt");
//			FileReader fr = new FileReader("store.txt");
			Properties prop = new Properties();
			prop.load(fr);
			System.out.println(prop);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public static void method1() {
		try {
			Properties prop = new Properties();
			prop.setProperty("001", "aaa");
			prop.setProperty("002", "bbb");
			prop.setProperty("003", "ccc");
			prop.setProperty("004", "ddd");
			
			FileWriter fw = new FileWriter("store.txt");
			prop.store(fw, "hello store()");
			fw.close();
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	public static void method0() {
		try {
			Properties prop = new Properties();
			prop.setProperty("001", "aaa");
			prop.setProperty("002", "bbb");
			prop.setProperty("003", "ccc");
			prop.setProperty("004", "ddd");
			PrintWriter pw = new PrintWriter(new FileWriter(new File("prop_list.txt")));
			prop.list(pw);
			pw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
