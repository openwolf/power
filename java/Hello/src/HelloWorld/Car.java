package HelloWorld;

public class Car {
	int speed;	//	�洢����
	String color;
	String name;
	String direction;
	public void driveCar() {
		speed = 50;
		direction = "�Ϸ�";
	}
	public Car() {
		this("��ɫ","���Դ�","����",10);
	}
	public Car(String color,String name,String direction,int speed) {
		this.speed = speed;
		this.color = color;
		this.name = name;
		this.direction = direction;
	}
}
