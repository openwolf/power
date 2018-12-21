package run.openwolf.throwexception;

public class TestCup {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Cup aCup = new Cup();
		try {
			aCup.setCapacity(10001);
		} catch (Exception e) {
			System.out.println("捕捉到了exception类型的异常。异常信息如下");
			System.out.println(e.getMessage());
			System.out.println("异常处理结束");
		}
	}
}
