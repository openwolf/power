package run.openwolf.randomDemo;

import java.util.Random;

public class RandomDemo {
	public static void main(String[] args) {
		Random r = new Random();
		for (int i = 0; i < 20; i++) {
			int n = r.nextInt(10);
			System.out.println("n:" + n);
		}
	}
}
