package run.openwolf.io;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringReader;

public class BufferedInputReader {
	//	注释
	public static String reader(String filename) {
		String s;
		StringBuilder sb = new StringBuilder();
		try {
			BufferedReader in = new BufferedReader(new FileReader(filename));
			while((s=in.readLine())!=null) {
				sb.append(s + "\n");
			}
			in.close();
		}catch(IOException e) {
			System.out.println(e);
		}
		return sb.toString();		
	}
	public static void main(String[] args) {
		String s = reader(".//src//run//openwolf//io//BufferedInputReader.java");
				System.out.println(s);
	}
}

//		StringReader in = new StringReader(s);
//		int c;
//		try {
//			while((c=in.read())!=-1) {
//				System.out.print((char) c);
//			}
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		in.close();