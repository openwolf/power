package run.openwolf.net;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class Send0 {
	public static void main(String[] args) {
		try {
			//	创建发送socket对象
			DatagramSocket ds = new DatagramSocket();
			//	打包数据
			String meg = "MAYDAY!MAYDAY!MAYDAY!";
			byte[] buf = meg.getBytes();
			int len = buf.length;
			DatagramPacket dp = new DatagramPacket(buf, len, InetAddress.getLocalHost(), 9999);
			//	发送
			ds.send(dp);
			//	释放资源
			ds.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
