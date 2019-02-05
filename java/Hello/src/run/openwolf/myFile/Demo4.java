package run.openwolf.myFile;

import java.io.File;

public class Demo4 {
	public static void main(String[] args) {
		File f = new File("src");
		showFile(f);
	}
	public static void showFile(File f) {
		if(f.isDirectory()) {
			File[] list = f.listFiles();
			for(File file : list) {
				if(file.isFile()) {
					String name = file.getName();
					if(name.endsWith(".java")) {
						System.out.println(name);
					}
				}else if(file.isDirectory()) {
					showFile(file);
				}
			}
		}
	}
}
