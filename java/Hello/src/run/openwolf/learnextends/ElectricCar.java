package run.openwolf.learnextends;

public class ElectricCar extends Bus {
	
	public String type = "�綯��";
	public ElectricCar() {
		
	}
	public ElectricCar(int speed,String name,String color) {
		super(speed,name,color);
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ElectricCar car = new ElectricCar(60,"���Դ�","��ɫ");
		System.out.println("�ٶ�"+car.speed);
		System.out.println("����"+car.name);
		System.out.println("��ɫ"+car.color);
		System.out.println("Version: " + ElectricCar.Version);
	}

}
