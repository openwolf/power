package run.openwolf.newIo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Demo3 {
	public static void main(String[] args) {
		try {
			FileInputStream fis = new FileInputStream(new File("sync.jpg"));
			FileOutputStream fos = new FileOutputStream(new File("test.jpg"));
			//	一次读写一个字节数组
			int len;	//	用于存储读到的字节个数
			byte[] bys = new byte[1024];
			while((len = fis.read(bys))!=-1) {
				fos.write(bys, 0, len);
			}
			fos.close();
			fis.close();
			System.out.println("ok");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
