package run.openwolf.simplecopier;

public class OneCopierCopyShop {

	public static void main(String[] args) {
		Copier canon = new Copier("佳能");
		Employee simth = new Employee("Simth",4, canon);
		Employee john = new Employee("John", 5, canon);
		simth.start();
		john.start();
	}

}
