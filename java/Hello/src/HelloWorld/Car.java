package HelloWorld;

public class Car {
	int speed;	//	存储汽车
	String color;
	String name;
	String direction;
	public void driveCar() {
		speed = 50;
		direction = "南方";
	}
	public Car() {
		this("黄色","马自达","自由",10);
	}
	public Car(String color,String name,String direction,int speed) {
		this.speed = speed;
		this.color = color;
		this.name = name;
		this.direction = direction;
	}
}
