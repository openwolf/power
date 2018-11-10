package HelloWorld;

public class TestCar {
	public static void main(String[] args) {
		Car myCar = new Car();
		Car otherCar = myCar;
		myCar.driveCar();
		System.out.println("myCar.speed:"+myCar.speed);
		System.out.println("myCar.direction:"+myCar.direction);
		System.out.println("otherCar:"+otherCar.speed);
		System.out.println("otherCar:"+otherCar.direction);
	}
}
