package run.openwolf.myFile;

import java.io.File;

public class Demo1 {
	public static void main(String[] args) {
		try {
			File f0 = new File("a.txt");
			File f1 = new File("a");
			File f2 = new File("c\\d\\e");
			File f3 = new File("c\\d");
			File f4 = new File("c");
			File f5 = new File("t.txt");
			System.out.println(f0.createNewFile());
			System.out.println(f1.mkdir());
			System.out.println(f2.mkdirs());
			f5.mkdir();	//	创建的是文件夹
			f0.delete();
			f1.delete();
			f2.delete();
			f3.delete();
			f4.delete();
			f5.delete();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
