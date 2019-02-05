package run.openwolf.exceptionDemo;

public class Demo3 {
	public static void main(String[] args) {
		try {
//			method0(100);
//			method0(101);
			method1(101);
		}catch(MyException0 e) {
			e.printStackTrace();
		}catch (MyException1 e) {
			e.printStackTrace();
		}finally {
			System.out.println("over");
		}
	}
	public static void method0(int i) {
		if(i<0||i>100) {
			throw new MyException1("Exception");
		}
		System.out.println("ok");
	}
	public static void method1(int i) throws MyException0 {
		if(i<0||i>100) {
			throw new MyException0("RuntimeException");
		}
		System.out.println("ok");
	}
	
}
class MyException0 extends Exception{

	public MyException0() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MyException0(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}
class MyException1 extends RuntimeException{

	public MyException1() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MyException1(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}

