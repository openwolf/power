package run.openwolf.net;

import java.net.InetAddress;

public class Demo0 {
	public static void main(String[] args) {
		try {
			InetAddress address0 = InetAddress.getByName("DESKTOP-K6D6EQ8");
			System.out.println(address0);
			
			InetAddress address1 = InetAddress.getLocalHost();
			System.out.println(address1);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
