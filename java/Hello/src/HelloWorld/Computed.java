package HelloWorld;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Computed {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("������һ�����֣�Ȼ����Enter����");
		int valueFromConsole = Integer.parseInt(reader.readLine());
		System.out.println("�����ֵΪ��" + valueFromConsole);
	}

}
