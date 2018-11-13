package run.openwolf.learnextends;

public class CarBase {
	public static String Version = "1.0.0";  
	public int speed;	//	int变量，表示车速
	public String name;	//	车名
	public String color;	//	车的颜色
	public int maxSpeed = 90;	//	最大车速
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
		System.out.println("Car构造函数被调用了");
	}
	public CarBase(int speed, String name, String color) {
		System.out.println("Car构造函数被调用了");
		this.speed = speed;
		this.name = name;
		this.color = color;
	}
}
