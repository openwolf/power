package run.openwolf.net;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class Recive0 {
	public static void main(String[] args) {
		try {
			//	创建接受socket对象
			DatagramSocket ds = new DatagramSocket(9999);
			//	创建接受对象
			//	DatagramPacket(byte[] buf,int length)
			byte[] buf = new byte[1024];
			DatagramPacket dp = new DatagramPacket(buf, buf.length);
			//	接受
			ds.receive(dp);
			//	解析数据	
			//	InetAddress	getAddress()	获取发送端的IP对象
			InetAddress address = dp.getAddress();
			//	byte[]	getData()	获取接受到的数据，也可以直接使用创建包对象时的数组
			byte[] data = dp.getData();
			//	int	getLength()	获取具体收到数据的长度
			int len = dp.getLength();
			System.out.println("send --->" + address);
			System.out.println("data:"+new String(data,0,len));
			//	释放资源
			ds.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
