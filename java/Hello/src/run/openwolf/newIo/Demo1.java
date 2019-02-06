package run.openwolf.newIo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;

public class Demo1 {
	public static void main(String[] args) {
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter bw = new BufferedWriter(new FileWriter(new File("a.txt")));
			String val;
			System.out.println("写点什么吧");
			while((val = br.readLine())!=null) {
				if(val.startsWith("exit")) {
					break;
				}
				bw.write(val);
				bw.newLine();
				bw.flush();
			}
			br.close();
			bw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
