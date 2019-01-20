package run.openwolf.manageStudent;

import java.util.ArrayList;
import java.util.Scanner;

public class Manage {
	public static void main(String[] args) {
		ArrayList<Student> students = new ArrayList<Student>();
		showMessage(students);
	}
	/**
	 *	按学号查询某个学生
	 * @return
	 */
	private static int getSomeOne(ArrayList<Student> list,String num) {
		int result = -1;
		int length = list.size(); 
		for(int i=0;i<length;i++) {
			if(list.get(i).getNum().equals(num)) {
				result = i;
				break;
			}
		}
		return result;
	}
	
	/**
	 *	添加学生
	 *	返回添加结果 
	 */
	public static void addStudent(ArrayList<Student> list) {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入学号");
		String id = sc.nextLine();
		int index = getSomeOne(list,id);
		if(index >= 0) {
			System.out.println("该学号已存在");
		}else {
			System.out.println("请输入姓名");
			String name = sc.nextLine();
			System.out.println("请输入年龄");
			String age = sc.nextLine();
			System.out.println("请输入出生地");
			String hometown = sc.nextLine();
			Student one = new Student(id,name,age,hometown);
			list.add(one);
			System.out.println("录入学生信息成功");
		}
	}
	
	/**
	 * 显示列表中的学生
	 */
	public static void showList(ArrayList<Student> list) {
		if(list.size()<=0) {
			return;
		}
		System.out.println("学号\t\t姓名\t年龄\t出生地");
		for(int i = 0;i<list.size();i++) {
			Student item = list.get(i);
			System.out.println(item.getNum()+"\t"+item.getName()+"\t"+item.getAge()+"\t"+item.getHometown());
		}
	}
	
	/**
	 * 修改学生信息
	 */
	public static void changeInfo(ArrayList<Student> list) {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入学号");
		String num = sc.nextLine();
		int index = getSomeOne(list, num);
		if(index < 0) {
			System.out.println("该学号不存在");
		}else {
			Student one = list.get(index);
			System.out.println("请输入姓名");
			String name = sc.nextLine();
			one.setName(name);
			System.out.println("请输入年龄");
			String age = sc.nextLine();
			one.setAge(age);
			System.out.println("请输入出生地");
			String hometown = sc.nextLine();
			one.setHometown(hometown);
			System.out.println("修改学生信息成功");
		}
	}
	
	/**
	 * 删除学生
	 */
	public static void removeItem(ArrayList<Student> list) {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入学号");
		String num = sc.nextLine();
		int index = getSomeOne(list, num);
		if(index < 0) {
			System.out.println("该学号不存在");
		}else {
			list.remove(index);
		}
	}
	
	
	/**
	 * 主流程
	 */
	public static void showMessage(ArrayList<Student> list) {
		while(true) {
			Scanner sc = new Scanner(System.in);
			System.out.println("-----欢迎来到学生管理系统，请选择-----");
			System.out.println("1 查看所有学生");
			System.out.println("2 添加学生");
			System.out.println("3 删除学生");
			System.out.println("4 修改学生");
			System.out.println("5 退出");
			String val = sc.nextLine();
			switch(val) {
				case "1":
					showList(list);
					break;
				case "2":
					addStudent(list);
					break;
				case "3":
					removeItem(list);
					break;
				case "4":
					changeInfo(list);
					break;
				case "5":
					System.out.println("谢谢使用");
					return;
				default:
					System.out.println("输入选项有误，请重新输入");
					break;
			}
		}
	}
}
