package run.openwolf.simplecopier;

public class Employee extends Thread {
	private int workTimes;
	Copier copier ;
	public Employee(String name,int workTimes,Copier copier) {
		super(name);
		this.workTimes = workTimes;
		this.copier = copier;	
	}
	public void run() {
		System.out.println(this.getName() + ":开始工作。");
		for(int i=0;i<workTimes;i++) {
			int pageAmout = (int)(5 * Math.random()) + 1;
			System.out.println("\"" + this.getName() + "\"尝试调用" + copier.getName() + "\"的copyPages()方法");
			copier.copyPages(pageAmout);
		}
		System.out.println(this.getName() + ":完成了工作，下班。");
	}
}
