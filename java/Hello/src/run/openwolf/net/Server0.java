package run.openwolf.net;

import java.io.InputStream;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

public class Server0 {
	public static void main(String[] args) {
		try {
			//	创建接收端Socket对象
			ServerSocket ss = new ServerSocket(9999);
			//	监听（阻塞）
			Socket s = ss.accept();
			//	获取输入流对象
			InputStream is = s.getInputStream();
			InetAddress address = s.getInetAddress();
			//	获取数据
			byte[] bys = new byte[1024];
			int len;	//	用于存储读取到的字节个数
			len = is.read(bys);
			System.out.println("client -->" + address);
			System.out.println(new String(bys,0,len));
			//	释放资源
			s.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
