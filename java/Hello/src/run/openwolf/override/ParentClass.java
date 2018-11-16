package run.openwolf.override;

public class ParentClass {
	public void showMeg(String val) {
		System.out.println(val);
	}
	public void test() {
		this.privateMethod();
		this.defaultMethod();
		this.protectedMethod();
		this.publicMethod();
	}
	public void publicMethod() {
		this.showMeg("publicMethod");
	}
	private void privateMethod() {
		this.showMeg("privateMethod");
	}
	protected void protectedMethod() {
		this.showMeg("protectedMethod");
	}
	void defaultMethod() {
		this.showMeg("defaultMethod");
	}
}
