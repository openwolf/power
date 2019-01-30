package run.openwolf.objectDemo;

public class demo1 {
	public static void main(String[] args) {
		new Object() {
			@Override
			protected void finalize(){
				System.out.println("啊 我死了");
			}
		};
		System.gc();
	}
}
