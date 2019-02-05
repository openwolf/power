package run.openwolf.myFile;

import java.io.File;

public class Demo2 {
	public static void main(String[] args) {
		try {
			String path = "D:\\learn\\gitRepository\\java\\note";
			File f0 = new File(path,"a");
			File f1 = new File(path,"a.txt");
			System.out.println(f0.isAbsolute());	//	true
			System.out.println(f1.isAbsolute());	//	true
			File f2 = new File("b");
			File f3 = new File("b.txt");
			System.out.println(f2.isAbsolute());	//	false
			System.out.println(f3.isAbsolute());	//	false
			f2.mkdir();
			f3.createNewFile();
			System.out.println("-------------------------------------");
			System.out.println("f2.exists:"+f2.exists());
			System.out.println("f3.exists:"+f3.exists());
			System.out.println("f2.isDirectory:"+f2.isDirectory());
			System.out.println("f2.isFile:"+f2.isFile());
			System.out.println("f3.isDirectory:"+f3.isDirectory());
			System.out.println("f3.isFile:"+f3.isFile());
			File f4 = new File("c.txt");	//	隐藏文件
			System.out.println(f4.isHidden());	//	true
			f2.delete();
			f3.delete();
			f4.delete();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
