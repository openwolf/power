package run.openwolf.myThread;

public class Demo0 {
	public static void main(String[] args) {
		//	继承Thread
		class MyThread0 extends Thread{
			//	重写run方法
			@Override
			public void run() {
				for(int i=0;i<5;i++) {
					System.out.println(getName()+":"+i);
				}
			}
		}
		//	创建对象
		MyThread0 mt0 = new MyThread0();
		mt0.setName("my_0");
		MyThread0 mt1 = new MyThread0();
		mt1.setName("my_1");
		//	调用start方法
		mt0.start();
		mt1.start();
		System.out.println("main over!");
	}
}
