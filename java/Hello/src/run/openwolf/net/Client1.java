package run.openwolf.net;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;

public class Client1 {
	public static void main(String[] args) {
		try {
			// 创建客户端Socket对象
			Socket s = new Socket(InetAddress.getLocalHost(), 9999);
			// 获取输出流对象
			OutputStream os = s.getOutputStream();
			// 发出数据
			String val = "mayday!mayday!mayday!";
			os.write(val.getBytes());
			// 接收数据
			InputStream is = s.getInputStream();
			byte[] bys = new byte[1024];
			int len = is.read(bys);
			// 输出数据
			System.out.println(new String(bys, 0, len));
			// 释放资源
			s.close();

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
