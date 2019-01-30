package run.openwolf.objectDemo;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class demo2 {
	public static void main(String[] args) throws ParseException {
//		DateFormat.getTimeInstance().format(new Date())
//		System.out.println(DateFormat.getTimeInstance().format(new Date()));
//		Date d = new Date();
//		System.out.println(d.getTime());
//		d.setTime(0);
//		System.out.println(d.getTime());
//		method1();
//		method2();
		
		method3();
		
	}

	private static void method3() {
		Calendar c = Calendar.getInstance();
		//	void set(int field, int value):把指定字段修改成指定的值
		c.set(Calendar.YEAR, 2020);
		c.set(Calendar.MONTH, 0);
		c.set(Calendar.DAY_OF_MONTH, 30);
		
		//	void add(int field, int value):把指定字段上加上指定的值
		c.add(Calendar.DAY_OF_MONTH, 1);
		
		//	int get(int field):返回给定日历字段的值
		int year = c.get(Calendar.YEAR);
		int month = c.get(Calendar.MONDAY) + 1;
		int day = c.get(Calendar.DAY_OF_MONTH);
		
		
		System.out.println(year + "-" + month + "-" + day);
	}

	private static void method2() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyy-MM-dd HH:mm:ss");
		Date date = new Date();
		String val = sdf.format(date);
		System.out.println(val);	//	2019-01-30 23:05:59
		Date d = sdf.parse("2019-01-30 23:05:59");
		System.out.println(d.toLocaleString());
	}

	private static void method1() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat();
		Date date = new Date();
		String val = sdf.format(date);
		System.out.println(val);
		
		Date d = sdf.parse(val);
		System.out.println(d.toLocaleString());
	}
}
