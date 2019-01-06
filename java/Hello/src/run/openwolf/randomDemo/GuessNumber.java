package run.openwolf.randomDemo;

import java.util.Random;
import java.util.Scanner;

public class GuessNumber {
	public static void main(String[] args) {
		// 获取随机数
		Random n = new Random();
		int result = n.nextInt(100) + 1;
		Scanner sc = new Scanner(System.in);
		while (true) {
			System.out.println("请输入你要猜的数据1~100");
			int guessNum = sc.nextInt();
			if (guessNum > result) {
				System.out.println("你猜的数字" + guessNum + "大了");
			} else if (guessNum < result) {
				System.out.println("你猜的数字" + guessNum + "小了");
			} else {
				System.out.println("恭喜，你猜对了");
				break;
			}
		}
		sc.close();
	}
}
