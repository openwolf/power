package HelloWorld;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Computed {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("请输入一个数字，然后敲Enter键：");
		int valueFromConsole = Integer.parseInt(reader.readLine());
		System.out.println("输入的值为：" + valueFromConsole);
	}

}
