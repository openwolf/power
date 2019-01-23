package run.openwolf.buffered;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class demo0 {
	public static void main(String[] args) throws IOException {
//		FileWriter fw = new FileWriter("bw.txt");
//		FileReader fr = new FileReader("a.txt");
//		BufferedWriter bw = new BufferedWriter(fw);
//		BufferedReader br = new BufferedReader(fr);
//		BufferedWriter bw = new BufferedWriter(new FileWriter("bw.txt"));
//		BufferedReader br = new BufferedReader(new FileReader("a.txt"));
//		String chs;
//		while((chs=br.readLine())!=null) {
//			bw.write(chs);
//			bw.newLine();
//			bw.flush();
//		}
//		bw.close();
//		br.close();
		
		ArrayList<Student> array = new ArrayList<Student>();
		init(array);
//		load("data.txt", array);
	}
	public static void init(ArrayList<Student> array) throws IOException {
		Student s0 = new Student("001","小明","18","南京");
		Student s1 = new Student("002","小红","28","北京");
		Student s2 = new Student("003","小兰","38","上海");
		Student s3 = new Student("004","小黄","48","河南");
		Student s4 = new Student("005","小紫","58","温州");
		array.add(s0);
		array.add(s1);
		array.add(s2);
		array.add(s3);
		array.add(s4);
		WriterData("data.txt", array);
	}
	public static void WriterData(String fileName,ArrayList<Student> array) throws IOException {
		BufferedWriter bw = new BufferedWriter(new FileWriter(fileName));
		for(int i=0;i<array.size();i++) {
			bw.write(array.get(i).showInfo());
			bw.newLine();
			bw.flush();
		}
		bw.close();
	}
	public static void load(String fileName,ArrayList<Student> array) throws IOException {
		BufferedReader br = new BufferedReader(new FileReader(fileName));
		String val;
		while((val = br.readLine())!=null) {
			String[] fields = val.split(",");
			array.add(new Student(fields[0],fields[1],fields[2],fields[3]));
		}
		br.close();
		for(int i=0;i<array.size();i++) {
			System.out.println(array.get(i).showInfo());
		}
	}
}
