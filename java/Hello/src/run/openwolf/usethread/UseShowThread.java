package run.openwolf.usethread;

public class UseShowThread {
	public static void main(String[] args) {
		ShowThreadName defaultName = new ShowThreadName();
		ShowThreadName name = new ShowThreadName("线程n");
		defaultName.setName("new name");
		defaultName.start();
		name.start();
	}
}
