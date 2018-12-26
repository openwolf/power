package run.openwolf.multithread;

public class RunMultiPrintNumThread {
	public static void main(String[] args) {
		PrintNumberThread threadOne = new PrintNumberThread(3);
		PrintNumberThread threadTwo = new PrintNumberThread(5);
		threadOne.setName("线程1");
		threadTwo.setName("线程2");
		threadOne.start();
		threadTwo.start();
		System.out.println("主线程结束了");
	}
}
