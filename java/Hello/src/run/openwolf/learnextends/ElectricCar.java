package run.openwolf.learnextends;

public class ElectricCar extends Bus {
	
	public String type = "电动车";
	public ElectricCar() {
		
	}
	public ElectricCar(int speed,String name,String color) {
		super(speed,name,color);
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ElectricCar car = new ElectricCar(60,"马自达","黄色");
		System.out.println("速度"+car.speed);
		System.out.println("名称"+car.name);
		System.out.println("颜色"+car.color);
		System.out.println("Version: " + ElectricCar.Version);
	}

}
