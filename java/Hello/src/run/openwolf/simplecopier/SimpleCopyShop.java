package run.openwolf.simplecopier;

public class SimpleCopyShop {

	public static void main(String[] args) {
		Copier canon = new Copier("佳能");
		Copier sharp = new Copier("夏普");
		Employee simth = new Employee("Simth",4, canon);
		Employee john = new Employee("John", 5, sharp);
		simth.start();
		john.start();
	}

}
