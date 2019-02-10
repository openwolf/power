package run.openwolf.newIo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;

public class Demo5 {
	public static void main(String[] args) {
//		write();
//		read();
	}

	public static void read() {
		try {
			//	创建输入流对象
			ObjectInputStream ois = new ObjectInputStream(
					new FileInputStream(new File("list.tmp")
							)
					);
			//	读取数据
			Object obj = ois.readObject();
			ArrayList<Student> list = (ArrayList<Student>) obj;
			//	遍历数据
			for (Student student : list) {
				System.out.println(student);
			}
			//	释放资源
			ois.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void write() {
		try {
			//	创建输出流对象
			ObjectOutputStream oos = new ObjectOutputStream(
					new FileOutputStream(
							new File("list.tmp")
							)
					);
			//	创建集合对象
			ArrayList<Student> list = new ArrayList<Student>();
			//	给集合添加数据
			list.add(new Student("001",10));
			list.add(new Student("002",11));
			list.add(new Student("003",12));
			list.add(new Student("004",13));
			//	写出数据
			oos.writeObject(list);
			//	释放资源
			oos.close();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
