package run.openwolf.usethread;

public class CurrentThreadMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		PrintCurrentThreadName printer = new PrintCurrentThreadName();
		printer.printCurrentThreadName();
		MyThread mythread = new MyThread();
		mythread.start();

		PrintCurrentThreadName printer1 = new PrintCurrentThreadName();
		printer1.printCurrentThreadName();
	}

}
