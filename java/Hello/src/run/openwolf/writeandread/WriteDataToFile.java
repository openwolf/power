package run.openwolf.writeandread;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

public class WriteDataToFile {
	public static void main(String[] args) {
		File dataFile = new File("d:\\datafile.txt");
		if(dataFile.exists() && dataFile.isFile()) {
			System.out.println("使用已经存在的datafile.txt文件");
		}else {
			try {
				dataFile.createNewFile();
				System.out.println("创建datafile.txt文件。");
			}catch(IOException e) {
				System.out.println("创建文件出错，错误信息为：" + e.getMessage());
				return;
			}
			try {
				PrintWriter pw = new PrintWriter(dataFile);
				pw.write("向文件中写入数据");
				pw.close();
			}catch(FileNotFoundException e) {
				System.out.println("找不到文件！错误信息为：" + e.getMessage());
			}
		}
	}
}
