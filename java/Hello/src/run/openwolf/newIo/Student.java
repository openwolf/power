package run.openwolf.newIo;

import java.io.Serializable;

public class Student implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2346863718297336770L;
	String name;
	int age;
	public Student() {
		
	}
	public Student(String name,int age) {
		this.name = name;
		this.age = age;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", age=" + age + "]";
	}
}
