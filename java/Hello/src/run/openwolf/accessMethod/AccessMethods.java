package run.openwolf.accessMethod;

public class AccessMethods {
	/**
	 * ��ӡ��Ϣ
	 * @param val ��Ҫ�������Ϣ
	 */
	public void showMeg(String val) {
		System.out.println(val);
	}
	/**
	 * public���η���
	 */
	public void publicMethod() {
		this.showMeg("publicMethod");
	}
	/**
	 * Ĭ�����η���
	 */
	void defaultMethod() {
		this.showMeg("defaultMethod");
	}
	/**
	 * protected���η���
	 */
	protected void protectedMethod() {
		this.showMeg("protectedMethod");
	}
	/**
	 * private���η���
	 */
	private void privateMethod() {
		this.showMeg("privateMethod");
	}
	public static void main(String[] args) {
		AccessMethods methods = new AccessMethods();
		methods.privateMethod();
		methods.defaultMethod();
	}
}
