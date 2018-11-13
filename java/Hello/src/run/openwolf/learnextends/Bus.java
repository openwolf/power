package run.openwolf.learnextends;

public class Bus extends CarBase {
	public int max_Passenger = 35;
	public int current_Passenger = 0;
	/**
	 * �ϳ�
	 * @param p_amout	�˿�����
	 * @return	������ϳ�	�ɹ�true	ʧ�� false
	 */
	public boolean getOnBus(int p_amout) {
		if(p_amout > 0) {
			int temp = current_Passenger + p_amout;
			if(temp > max_Passenger) {
				return false;
			}else {
				current_Passenger = temp;
				return true;
			}
		}else {
			return false;
		}
	}
	/**
	 * �³�
	 * @param p_amout	�˿�����
	 * @return	������³�	�ɹ�true	ʧ�� false
	 */
	public boolean getDownBus(int p_amout) {
		if(p_amout>0) {
			int temp = current_Passenger - p_amout;
			if(temp < 0) {
				return false;
			}else {
				current_Passenger = temp;
				return true;
			}
		}else {
			return false;
		}
	}
	public Bus() {
		System.out.println("Bus���캯����������");
	}
	public Bus(int speed, String name, String color) {
		super(speed,name,color);
		System.out.println("Bus���캯����������");
	}
}
