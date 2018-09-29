package hello;

import java.util.Scanner;

public class Hello {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("hello world");
		Scanner in = new Scanner(System.in);
//		System.out.println("echo:" + in.nextLine());
		int price = in.nextInt();
//		price = in.nextInt();
		System.out.println("100-"+price+"="+(100-price));
		in.close();
	}

}
