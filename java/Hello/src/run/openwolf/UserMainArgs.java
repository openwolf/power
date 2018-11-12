package run.openwolf;

public class UserMainArgs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("展示main方法接收到的参数");
		int l = args.length;
		if(l == 0) {
			System.out.println("main没接收到参数");
		}
		for( byte i = 0; i < l; i++ ) {
			System.out.println("args[" + i + "]:" + args[i]);
		}
	}
}
