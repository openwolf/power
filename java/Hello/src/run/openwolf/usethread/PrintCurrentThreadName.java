package run.openwolf.usethread;

public class PrintCurrentThreadName {
	public void printCurrentThreadName() {
		Thread currentThread = Thread.currentThread();
		String threadName = currentThread.getName();
		System.out.println("ִ执行代码的线程叫做：" + threadName);
		
	}
}
