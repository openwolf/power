package run.openwolf.newIo;

import java.io.EOFException;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class Demo4 {
	public static void main(String[] args) {
		//	init();
		try {
			ObjectInputStream ois = new ObjectInputStream(new FileInputStream(new File("data.tmp")));
			try {				
				while(true) {
					Object obj = ois.readObject();
					System.out.println(obj);
				}
			}catch(EOFException e){
				System.out.println("读完了");
			}
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	public static void init() {
		try {
			ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(new File("data.tmp")));
			Student s0 = new Student("aaa",10);
			Student s1 = new Student("bbb",11);
			Student s2 = new Student("ccc",12);
			
			oos.writeObject(s0);
			oos.writeObject(s1);
			oos.writeObject(s2);
			
			oos.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
