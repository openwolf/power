package run.openwolf.simplecopier;

public class Copier {
	private String name;
	public Copier(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public synchronized void copyPages(int pages) {
		Thread employee = Thread.currentThread();
		System.out.println(employee.getName() + "\t正在使用复印机\t" + name);
		long time = pages * 200;
		try {
			Thread.sleep(time);
		}catch (InterruptedException e) {
			System.out.println("对不起，程序运行出错，错误信息为：" + e.getMessage());
		}
		System.out.println(employee.getName() + "\t用完了复印机\t" + name);
	}
}
