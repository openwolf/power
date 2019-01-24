package run.openwolf.abstractClass;

public class demo0 {
	public static void main(String[] args) {
		
	}
}

abstract class animal{
	public abstract void eat();
}
class cat extends animal{

	@Override
	public void eat() {
		System.out.println("吃鱼");
	}
	
}