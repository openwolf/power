package run.openwolf.newIo;

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class Demo8 {
	public static void main(String[] args) {
		//	method0();
		try {
			FileInputStream fis = new FileInputStream("utf8.txt");
			byte[] byts = new byte[1024];
			int len = fis.read(byts);
			System.out.println(new String(byts,0,len,"UTF-8"));
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	public static void method0() {
		try {
			FileOutputStream fos = new FileOutputStream("utf8.txt");
			String val = "我使用的是UTF8";
			byte[] byts = val.getBytes("UTF-8");
			fos.write(byts);
			fos.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
