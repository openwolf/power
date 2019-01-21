package run.openwolf.fileWriterTest;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class demo1 {
	public static void main(String[] args) throws IOException {
		System.out.println("随便写点什么添加进a.txt文件");
		FileWriter fw = new FileWriter("a.txt",true);
		Scanner sc = new Scanner(System.in);
		while(true) {
			String val = sc.nextLine();
			if(val.equals("exit")) {
				break;
			}else {
				fw.write(val);
				fw.write("\n");
			}
		}
		fw.close();
		sc.close();
	}
}
