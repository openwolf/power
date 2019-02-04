package run.openwolf.collection;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class Demo2 {
	public static void main(String[] args) {
		Student s0 = new Student("aaa",11);
		Student s1 = new Student("bbb",22);
		Student s2 = new Student("ccc",33);
		Student s3 = new Student("ddd",44);
		Student s4 = new Student("eee",55);
		System.out.println(s0.equals(s1));
		List<Student> l = new ArrayList<Student>();
		l.add(s0);
		l.add(s1);
		l.add(s2);
		l.add(s3);
		l.add(s4);
		ListIterator<Student> it = l.listIterator();
//		while(it.hasNext()) {
//			System.out.println(it.next());
//		}
		for(Student s : l) {
			System.out.println(s);
		}
	}
}

class Student {
	private String name;
	private int age;
	public Student() {
		
	}
	public Student(String name,int age) {
		this.name = name;
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", age=" + age + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + age;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Student other = (Student) obj;
		if (age != other.age)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
}