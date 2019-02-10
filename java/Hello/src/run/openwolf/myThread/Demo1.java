package run.openwolf.myThread;

public class Demo1 {
	public static void main(String[] args) {
		class MyThread1 implements Runnable{
			@Override
			public void run() {
				for(int i=0;i<5;i++) {
					System.out.println(Thread.currentThread().getName() + ":" + i);
				}
			}
		}
		
		Thread t0 = new Thread(new MyThread1());
		t0.setName("001");
		Thread t1 = new Thread(new MyThread1());
		t1.setName("002");
		t0.start();
		t1.start();
	}
}
