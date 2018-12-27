package run.openwolf.sync;

public class SyncMethods {
	public synchronized static void syncStaticMehtod1() {
		System.out.println("这是静态的同步方法1");
	}
	public synchronized static void syncStaticMehtod2() {
		System.out.println("这是静态的同步方法2");
	}
	public static void staticMehtod() {
		System.out.println("这是静态方法");
	}
	public synchronized void syncMethod1() {
		System.out.println("这是一个同步方法1");
	}
	public synchronized void syncMethod2() {
		System.out.println("这是一个同步方法2");
	}
	public void method() {
		System.out.println("这是一个方法");
	}
}
