package HelloWorld;

public class PrintDriverProps {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Driver a = new Driver();
		System.out.println("Driver a name: " + a.name);
		System.out.println("Driver a age: " + a.age);
//		System.out.println("Driver a teacher.name: " + a.teacher.name);
		a.teacher = new Driver();
		a.teacher.name = "bbb";
		System.out.println("Driver a teacher.name: " + a.teacher.name);
	}

}
