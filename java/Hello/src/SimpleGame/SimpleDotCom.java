package SimpleGame;

public class SimpleDotCom {
	//	�� dotcom ������
	int [] locationCells;
	//	��¼������
	int numOfHits;
	
	public String checkYourself(String stringGuess) {
		//	���ַ���ת����int
		int guess = Integer.parseInt(stringGuess);
		//	���������淵�ؽ���ı������� miss ��ΪĬ��ֵ
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
