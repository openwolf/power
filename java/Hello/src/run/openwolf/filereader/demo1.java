package run.openwolf.filereader;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class demo1 {
	public static void main(String[] args) throws IOException {
		FileReader fr = new FileReader("a.txt");
		FileWriter fw = new FileWriter("b.txt");
		
		int ch;
		
		while((ch=fr.read())!=-1) {
			fw.write(ch);
		}
		fr.close();
		fw.close();
		System.out.println("ok");
	}
}
