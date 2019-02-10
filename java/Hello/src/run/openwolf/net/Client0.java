package run.openwolf.net;

import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;

public class Client0 {
	public static void main(String[] args) {
		try {
			//	创建发送端Socket对象（创建连接）
			Socket s = new Socket(InetAddress.getLocalHost(), 9999);
			//	获取输出流对象
			OutputStream os = s.getOutputStream();
			//	发送数据
			String data = "MAYDAY!MAYDAY!MAYDAY!";
			os.write(data.getBytes());
			//	释放资源
			s.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
