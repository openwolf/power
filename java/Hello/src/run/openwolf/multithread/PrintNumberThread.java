package run.openwolf.multithread;

public class PrintNumberThread extends Thread {
	private int times;

	public PrintNumberThread(int times) {
		this.times = times;
	}

	public void run() {
		for (int i = 0; i < times; i++) {
			String content = this.getName() + ":\t" + i;
			try {
				this.sleep(1);
			} catch (InterruptedException e) {
				System.out.println("对不起，程序运行出错，错误信息为" + e.getMessage());
			}
			System.out.println(content);
		}
		System.out.println("线程\"" + this.getName() + "\"结束了");
	}
}
