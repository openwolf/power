package SimpleGame;

public class SimpleDotComTestDrive {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//	初始化一个SimpleDotCom对象
		SimpleDotCom dot = new SimpleDotCom();
		
		//	创建带有dot com位置的数据
		int[] locations = {2,3,4};
		//	调用dot com 的setter
		dot.setLocationCells(locations);
		
		//	模拟猜测
		String UserGuess = "2";
		
		String result = dot.checkYourself(UserGuess);
		String testResult = "failed";
		
		if(result.equals("hit")) {
			testResult = "passed";
		}
		System.out.println(testResult);
	}

}
