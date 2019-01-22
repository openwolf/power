package run.openwolf.filereader;

import java.io.FileReader;
import java.io.IOException;

public class demo0 {
	public static void main(String[] args) throws IOException  {
		FileReader fr = new FileReader("a.txt");
		int ch;
			while((ch = fr.read())!=-1) {
				System.out.print(ch + "--");
				System.out.print((char)ch + " ");
		}
		fr.close();
	}
}
