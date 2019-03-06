package run.openwolf.io;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;

public class BasicFileOut {
	static String file = "BasicFileOutPut.txt";
	static String source = ".//src//run//openwolf//io//BufferedInputReader.java";
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new StringReader(BufferedInputReader.reader(source)));
//		PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(file)));
		PrintWriter pw = new PrintWriter(file);
		String s;
		while((s=in.readLine())!=null) {
			pw.println(s);
		}
		in.close();
		pw.close();
	}
}
