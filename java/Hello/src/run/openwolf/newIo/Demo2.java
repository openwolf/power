package run.openwolf.newIo;

import java.io.PrintWriter;

public class Demo2 {
	public static void main(String[] args) {
		try {
			PrintWriter pw = new PrintWriter("b.txt");
			pw.write("1");
			pw.write("2");
			pw.write("3");
			pw.write("4");
			pw.write("5");
			pw.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
