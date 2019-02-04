package run.openwolf.exceptionDemo;

public class Demo0 {
	public static void main(String[] args) {
		try {
			int [] array = new int[5];
			System.out.println(array[6]);
			
			String str = null;
			System.out.println(str.length());
			
		}catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("越界了");
		}catch(NullPointerException e) {
			System.out.println("空指针");
		}catch(Exception e) {
			System.out.println("爆炸了");
		}
	}
}
