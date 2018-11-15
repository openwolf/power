package run.openwolf.accessMethod.diffpackage;
import run.openwolf.accessMethod.AccessMethods;
public class SubClassInDiffPackage extends AccessMethods {
	public static void main(String[] args) {
		SubClassInDiffPackage methods = new SubClassInDiffPackage();
		methods.protectedMethod();
	}
}
