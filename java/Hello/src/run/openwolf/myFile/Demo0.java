package run.openwolf.myFile;

import java.io.File;

public class Demo0 {
	public static void main(String[] args) {
		String path = "D:\\learn\\gitRepository\\java\\note";
		File f0 = new File(path + "a.txt");	//	将指定的路径名转换成一个File对象
		
		File f1 = new File(path,"a.txt");	//	根据指定的父路径和文件路径创建File对象
		
		File f2 = new File(path);			//	指定的父路径对象
		File f3 = new File(f2,"a.txt");		//	根据指定的父路径对象和文件路径创建File对象
	}
}
