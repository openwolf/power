package run.openwolf.learnextends;

public class CarBase {
	public static String Version = "1.0.0";  
	public int speed;	//	int��������ʾ����
	public String name;	//	����
	public String color;	//	������ɫ
	public int maxSpeed = 90;	//	�����
	public void speedUp(int p_speed) {
		if(p_speed > 0) {
			int tempSpeed = 0;
			tempSpeed = speed + p_speed;
			if(tempSpeed <= maxSpeed) {
				speed = tempSpeed;
			}
		}
	}
	public void slowDown(int p_speed) {
		if(p_speed > 0) {
			int tempSpeed = 0;
			tempSpeed = speed - p_speed;
			if(tempSpeed >= 0) {
				speed = tempSpeed;
			}
		}
	}
	
	public CarBase() {
		System.out.println("Car���캯����������");
	}
	public CarBase(int speed, String name, String color) {
		System.out.println("Car���캯����������");
		this.speed = speed;
		this.name = name;
		this.color = color;
	}
}
