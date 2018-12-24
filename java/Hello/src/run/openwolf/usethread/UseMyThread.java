package run.openwolf.usethread;

public class UseMyThread {
	public static void main(String[] args) {
		MyThread thread = new MyThread();
		System.out.println("这是主线程代码开始");
		thread.start();
		
	}
}
