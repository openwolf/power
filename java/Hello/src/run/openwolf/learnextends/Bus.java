package run.openwolf.learnextends;

public class Bus extends CarBase {
	public int max_Passenger = 35;
	public int current_Passenger = 0;
	/**
	 * 上车
	 * @param p_amout	乘客数量
	 * @return	结果，上车	成功true	失败 false
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
	 * 下车
	 * @param p_amout	乘客数量
	 * @return	结果，下车	成功true	失败 false
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
		System.out.println("Bus构造函数被调用了");
	}
	public Bus(int speed, String name, String color) {
		super(speed,name,color);
		System.out.println("Bus构造函数被调用了");
	}
}
