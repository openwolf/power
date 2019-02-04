package run.openwolf.exceptionDemo;

import java.io.FileWriter;

public class Demo2 {
	public static void main(String[] args) {
		FileWriter fw = null;
		try {
			//	变量出了try 语句块将不可见
			//	System.out.println(2/0);
			fw = new FileWriter("exception.txt");
			fw.write("hello");
			fw.write(" ");
			fw.write("world!");
			System.out.println(2/0);
			fw.write("java");
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				//	预防fw为null
				if(fw != null) {
					fw.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		System.out.println("ok");
	}
}
