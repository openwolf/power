package run.openwolf.filereader;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class demo2 {
	public static void main(String[] args) throws IOException {
		FileReader fr = new FileReader("a.txt");
		FileWriter fw = new FileWriter("c.txt");
		char[] chs = new char[1024];
		int len;
		while((len = fr.read(chs))!=-1) {
			fw.write(chs, 0, len);
		}
		fw.close();
		fr.close();
		System.out.println("ok");
	}
}
