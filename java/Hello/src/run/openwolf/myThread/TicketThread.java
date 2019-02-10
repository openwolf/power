package run.openwolf.myThread;

public class TicketThread implements Runnable {

	int num = 100;
	static int ticket = 100;
	Object mutex = new Object();
	
	@Override
	public void run() {
		while(true) {
//			method0();
			method1();
		}
	}
	
	private synchronized void method0() {
		if(num>0) {
			System.out.println(Thread.currentThread().getName()+":"+num--);
			try {
				Thread.sleep(50);
				System.out.println("请求剩余票数，请稍后");
				if(num==0) {
					System.out.println("很抱歉，已售罄");
				}
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	private synchronized static void method1() {
		if(ticket>0) {
			System.out.println("网络"+Thread.currentThread().getName()+":"+ticket--);
			try {
				Thread.sleep(50);
				System.out.println("请求剩余票数，请稍后");
				if(ticket==0) {
					System.out.println("很抱歉，已售罄");
				}
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
