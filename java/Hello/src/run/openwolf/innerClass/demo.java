package run.openwolf.innerClass;

import run.openwolf.innerClass.Outer.Inner;

public class demo {
	public static void main(String[] args) {
//		Inner i = new Outer().new Inner();
		Outer.Inner i = new Outer().new Inner();
		i.fn();
	}
}

class Outer{
	private int num = 10;
	
	public void fn() {
		//	可以这么用
		Inner i = new Inner();
		i.fn();
		System.out.println("Outer");
	}
	
	class Inner{
		public void fn() {
			System.out.println("Inner");
		}
	}
}