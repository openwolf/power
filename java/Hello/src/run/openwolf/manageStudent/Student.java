package run.openwolf.manageStudent;

public class Student {
	//	学号
	private String num;
	//	姓名
	private String name;
	//	年龄
	private String age;
	//	家乡
	private String hometown;
	
	public Student() {
	}

	public Student(String num, String name, String age, String hometown) {
		this.num = num;
		this.name = name;
		this.age = age;
		this.hometown = hometown;
	}

	public String getNum() {
		return num;
	}

	public void setNum(String num) {
		this.num = num;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getHometown() {
		return hometown;
	}

	public void setHometown(String hometown) {
		this.hometown = hometown;
	}
	
	
}
