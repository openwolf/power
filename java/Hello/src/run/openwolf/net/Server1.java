package run.openwolf.net;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server1 {
	public static void main(String[] args) {
		try {
			// 创建服务端Socket对象
			ServerSocket ss = new ServerSocket(9999);
			// 监听
			Socket s = ss.accept();
			// 获取输入流对象
			InputStream is = s.getInputStream();
			// 获取数据
			byte[] bys = new byte[1024];
			int len = is.read(bys);
			// 转换数据
			String data = new String(bys, 0, len).toUpperCase();
			System.out.println(data);
			// 获取输出流对象
			OutputStream os = s.getOutputStream();
			// 返回数据（发出数据）
			os.write(data.getBytes());
			// 释放资源
			s.close();

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
