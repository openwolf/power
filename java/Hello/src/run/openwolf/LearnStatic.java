package run.openwolf;

public class LearnStatic {
	static byte num = 6;
	byte variable = 7;
	public static void staticMethod_0() {
		System.out.println("��̬����numֵΪ"+LearnStatic.num);
		LearnStatic obj = new LearnStatic();
		System.out.println("ʵ������variable��ֵΪ"+obj.variable);
		obj.instanceMethod();
		System.out.println("��Ҳ����ʹ�þ�̬����");
		LearnStatic.staticMethod_1(9);
	}
	public static void staticMethod_1(int a) {
		System.out.println("������"+a);
	}
	public void instanceMethod() {
		System.out.println("��Ҳ����LearnStatic�����Ժͷ���");
		System.out.println("LearnStatic.num:"+LearnStatic.num);
		LearnStatic.staticMethod_1(8);
	}
	public static void  main(String[] args) {
		LearnStatic.staticMethod_0();
	}
}
