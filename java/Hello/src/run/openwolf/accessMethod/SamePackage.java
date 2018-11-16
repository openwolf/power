package run.openwolf.accessMethod;

public class SamePackage {
	public static void main(String[] args) {
		AccessMethods methods = new AccessMethods();
		methods.protectedMethod();
		methods.defaultMethod();
	}
}
