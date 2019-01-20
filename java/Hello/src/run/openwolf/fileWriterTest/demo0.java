package run.openwolf.fileWriterTest;

import java.io.FileWriter;
import java.io.IOException;

public class demo0 {
	public static void main(String[] args) throws IOException {
		FileWriter fw = new FileWriter("d:\\fileWriterTest0.txt");
		fw.write("测试fileWriter写入数据");
		fw.flush();
		fw.close();
	}
}
