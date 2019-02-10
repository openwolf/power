package run.openwolf.net;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
/**
 * 模拟用户登录
 * @author 20055
 *
 */
public class ClientTest {
	public static void main(String[] args) {
		try {
			//	创建客户端Socket对象
			Socket s = new Socket(InetAddress.getLocalHost(), 7777);
			//	获取用户名和密码
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			System.out.println("输入用户名");
			String name = br.readLine();
			System.out.println("输入密码");
			String pw = br.readLine();
			//	获取输出流对象
			//	BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
			PrintWriter out = new PrintWriter(s.getOutputStream(),true); 
			//	写出数据
			out.println(name);
			out.println(pw);
			
			//	获取输入流对象
			
			BufferedReader ssr = new BufferedReader(new InputStreamReader(s.getInputStream()));
			String result = ssr.readLine();
			System.out.println(result);
			s.close();
			
			
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
