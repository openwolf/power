package run.openwolf.scanner;

import java.util.Scanner;

public class ScannerTest {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入一个整数");
		int a = sc.nextInt();
		System.out.println("你输入的整数是" + a);
		System.out.println("请再输入一个整数");
		int b = sc.nextInt();
		System.out.println("你输入的整数是" + b);
	}
}
