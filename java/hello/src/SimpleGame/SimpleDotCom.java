package SimpleGame;

public class SimpleDotCom {
	//	存 dotcom 的坐标
	int [] locationCells;
	//	记录击中数
	int numOfHits;
	
	public String checkYourself(String stringGuess) {
		//	把字符串转换成int
		int guess = Integer.parseInt(stringGuess);
		//	创建出保存返回结果的变量。以 miss 作为默认值
		String result = "miss";
		for(int cell : locationCells) {
			if(guess == cell) {
				result ="hit";
				numOfHits++;
				break;
			}
		}
		if(numOfHits == locationCells.length) {
			result = "kill";
		}
		return result;
	}
	
	void setLocationCells(int[] loc) {
		locationCells = loc;
	}
}
