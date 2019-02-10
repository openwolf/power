package run.openwolf.myThread;

public class Demo2 {
	public static void main(String[] args) {
		TicketThread tt = new TicketThread();
		Thread t0 = new Thread(tt);
		t0.setName("窗口1");
		Thread t1 = new Thread(tt);
		t1.setName("窗口2");
		Thread t2 = new Thread(tt);
		t2.setName("窗口3");
		t0.start();
		t1.start();
		t2.start();
	}
}
