package HelloWorld;

public class TestCar {
	public static void main(String[] args) {
		Car myCar = new Car();
		myCar.driveCar();
		System.out.println(myCar.speed);
		System.out.println(myCar.direction);
	}
}
