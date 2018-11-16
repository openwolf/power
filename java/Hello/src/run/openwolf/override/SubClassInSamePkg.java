package run.openwolf.override;

public class SubClassInSamePkg extends ParentClass {
	public void publicMethod() {
		this.showMeg("SubClass_publicMethod");
	}
	private void privateMethod() {
		this.showMeg("SubClass_privateMethod");
	}
	protected void protectedMethod() {
		this.showMeg("SubClass_protectedMethod");
	}
	void defaultMethod() {
		this.showMeg("SubClass_defaultMethod");
	}
	public static void main(String[] args) {
		SubClassInSamePkg test = new SubClassInSamePkg();
		test.test();
	}
}
