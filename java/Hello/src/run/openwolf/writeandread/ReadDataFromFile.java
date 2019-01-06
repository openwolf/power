package run.openwolf.writeandread;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class ReadDataFromFile {
	public static void main(String[] args) {
		File dataFile = new File("d:\\datafile.txt");
		if(dataFile.exists() && dataFile.isFile()) {
			System.out.println("从datafile.txt中读取数据");
		}else {
			System.out.println("datafile.txt文件不存在");
			return;
		}
		System.out.println("文件中内容为");
		try {
			FileReader fr = new FileReader(dataFile);
			BufferedReader br = new BufferedReader(fr);
			String content = null;
			while((content = br.readLine()) != null ) {
				System.out.println(content);
			}
			fr.close();
			br.close();
		}catch(FileNotFoundException e) {
			System.out.println("找不到文件：" + e.getMessage());
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
}
