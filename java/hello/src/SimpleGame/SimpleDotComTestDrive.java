package SimpleGame;

public class SimpleDotComTestDrive {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//	��ʼ��һ��SimpleDotCom����
		SimpleDotCom dot = new SimpleDotCom();
		
		//	��������dot comλ�õ�����
		int[] locations = {2,3,4};
		//	����dot com ��setter
		dot.setLocationCells(locations);
		
		//	ģ��²�
		String UserGuess = "2";
		
		String result = dot.checkYourself(UserGuess);
		String testResult = "failed";
		
		if(result.equals("hit")) {
			testResult = "passed";
		}
		System.out.println(testResult);
	}

}
