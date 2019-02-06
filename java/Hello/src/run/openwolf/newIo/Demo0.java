package run.openwolf.newIo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.OutputStreamWriter;

public class Demo0 {
	public static void main(String[] args) {
		//	init();
		try {
			BufferedReader br = new BufferedReader(new FileReader(new File("Demo3.java")));
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			String val;
			while((val = br.readLine())!=null) {
				bw.write(val);
				bw.newLine();
			}
			br.close();
			bw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	public static void init() {
		try {			
			String path = "D:\\learn\\gitRepository\\java\\Hello\\src\\run\\openwolf\\myFile";
			BufferedReader br = new BufferedReader(new FileReader(new File(path,"Demo3.java")));
			BufferedWriter bw = new BufferedWriter(new FileWriter(new File("Demo3.java")));
			String val;
			while((val = br.readLine())!=null) {
				bw.write(val);
				bw.newLine();
			}
			br.close();
			bw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
