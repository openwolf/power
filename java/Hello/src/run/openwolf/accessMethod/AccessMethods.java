package run.openwolf.accessMethod;

public class AccessMethods {
	/**
	 * 打印信息
	 * @param val 需要输出的信息
	 */
	public void showMeg(String val) {
		System.out.println(val);
	}
	/**
	 * public修饰方法
	 */
	public void publicMethod() {
		this.showMeg("publicMethod");
	}
	/**
	 * 默认修饰方法
	 */
	void defaultMethod() {
		this.showMeg("defaultMethod");
	}
	/**
	 * protected修饰方法
	 */
	protected void protectedMethod() {
		this.showMeg("protectedMethod");
	}
	/**
	 * private修饰方法
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
