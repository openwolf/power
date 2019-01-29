package run.openwolf.objectDemo;

public class demo {
	public static void main(String[] args) {
		School a = new School(new People("aaa"));
		System.out.println(a.toString());
	}
}
class School{
	private int num = 10;
	private People headMaster;
	public School() {
		
	}
	public School(People p) {
		this.headMaster = p;
	}
//	@Override
//	public String toString() {
//		return "{\"num\":"+num+"}";
//	}
	@Override
	public String toString() {
 		return "School [num=" + num + ", headMaster=" + headMaster + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + num;
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
		School other = (School) obj;
		if (num != other.num)
			return false;
		return true;
	}
	
}
class People{
	private String name;
	public People() {
	}
	public People(String name) {
		this.name = name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
}
