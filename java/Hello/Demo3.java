package run.openwolf.myFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Demo3 {
	public static void main(String[] args) {		
//		method();
//		method1();
//		method2();
//		method3();
//		method4();
	}

	public static void method4() {
		File f0 = new File("a.txt");
		File f1 = new File("b.txt");
		f0.renameTo(f1);
	}

	public static void method3() {
		try {
			File f = new File("a.txt");
			f.createNewFile();
			System.out.println(f.length());
	        SimpleDateFormat sdf = new  SimpleDateFormat("yyy-MM-dd HH:mm:ss");
	        Date date = new Date(f.lastModified());
	        String val = sdf.format(date);
			System.out.println(val); 
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void method2() {
		try {			
			String path = "D:\\learn\\gitRepository\\java\\note";
			File f = new File(path);
			File f0 = new File(f,"a.txt");
			File f1 = new File(f,"b");
			File f2 = new File("a.txt");
			File f3 = new File("b");
			File f4 = new File("c\\a.txt");
			File f5 = new File("c\\b");
			if(!f.exists()) {
				f.mkdirs();
			}
			//	需要确保父路径存在，不然创建会报错
			f0.createNewFile();	
			f1.mkdirs();
			System.out.println(f0.getParent());	//	D:\learn\gitRepository\java\note
			System.out.println(f1.getParent());	//	D:\learn\gitRepository\java\note
			System.out.println(f2.getParent());	//	null
			System.out.println(f3.getParent());	//	null
			System.out.println(f4.getParent());	//	c
			System.out.println(f5.getParent());	//	c
		}catch(Exception e) {
			System.out.println("啊 我死了");
		}
	}

	public static void method1() {
		String path = "D:\\learn\\gitRepository\\java\\note";
		File f0 = new File("a.txt");
		File f1 = new File("b");
		File f2 = new File(path,"a.txt");
		File f3 = new File(path,"b");
		System.out.println(f0.getPath());	//	a.txt
		System.out.println(f0.getName());	//	a.txt
		System.out.println(f1.getPath());	//	b
		System.out.println(f1.getName());	//	b
		System.out.println(f2.getPath());	//	D:\learn\gitRepository\java\note\a.txt
		System.out.println(f2.getName());	//	a.txt
		System.out.println(f3.getPath());	//	D:\learn\gitRepository\java\note\b
		System.out.println(f3.getName());	//	b
	}

	public static void method() {
		String path = "D:\\learn\\gitRepository\\java\\note";
		File f0 = new File("a.txt");
		File f1 = new File("b");
		File f2 = new File(path,"a.txt");
		File f3 = new File(path,"b");
		//	File getAbsoluteFile()	以File对象的形式返回当前File对象所有指向的绝对路径  
		//	String getAbsolutePath()	返回File对象所指向的绝对路径
		System.out.println(f0.getAbsolutePath());
		System.out.println(f1.getAbsolutePath());
		System.out.println(f2.getAbsolutePath());
		System.out.println(f3.getAbsolutePath());
	}
}
