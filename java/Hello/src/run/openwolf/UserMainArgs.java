package run.openwolf;

public class UserMainArgs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("չʾmain�������յ��Ĳ���");
		int l = args.length;
		if(l == 0) {
			System.out.println("mainû���յ�����");
		}
		for( byte i = 0; i < l; i++ ) {
			System.out.println("args[" + i + "]:" + args[i]);
		}
	}
}
