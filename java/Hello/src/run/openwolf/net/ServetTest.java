package run.openwolf.net;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.List;

public class ServetTest {
	public static void main(String[] args) {
		try {
			//	创建服务器端Socket对象
			ServerSocket ss = new ServerSocket(7777);
			//	监听
			Socket s = ss.accept();
			//	获取输入流对象
			BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
			//	获取用名和密码
			String name = br.readLine();
			String pw = br.readLine();
			//	获取账号信息
			List<User> list = UserList.UserList;
			User user = new User(name,pw);
			//	判断用户名密码是否正确
			boolean flag = false;
			if(list.contains(user)) {
				flag = true;
			}
			PrintWriter out = new PrintWriter(s.getOutputStream(),true);
			//	返回信息
			if(flag) {
				out.println("登录成功");
			}else {
				out.println("登录失败");
			}
			s.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
