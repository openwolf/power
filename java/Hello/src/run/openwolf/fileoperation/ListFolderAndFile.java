package run.openwolf.fileoperation;

import java.io.File;
import java.util.List;
import java.util.ArrayList;

public class ListFolderAndFile {
	public static void main(String[] args) {
		String folderPath = "e:" + File.separator;
		File folder = new File(folderPath);
		if (!folder.exists()) {
//			System.out.println(folderPath + "涓嶆槸鏈夋晥鐨勮矾寰�!");
			return;
		}
		if (!folder.isDirectory()) {
//			System.out.println(folderPath + "涓嶆槸鏈夋晥鐨勬枃浠跺す!");
			return;
		}
		File[] allFiles = folder.listFiles();
		List files = new ArrayList();
		List folders = new ArrayList();
		for (int i = 0; i < allFiles.length; i++) {
			if (allFiles[i].isFile()) {
				files.add(allFiles[i]);
			} else {
				folders.add(allFiles[i]);
			}
		}
//		System.out.println("鏂囦欢澶筡"" + folderPath + "\"涓寘鍚涓嬫枃浠跺す");
		printPath(folders);
//		System.out.println("鏂囦欢澶筡"" + folderPath + "\"涓寘鍚涓嬫枃浠�");
		printPath(files);
	}

	private static void printPath(List list) {
		for (int i = 0; i < list.size(); i++) {
			File file = (File) list.get(i);
			System.out.println(file.getName());
		}
	}
}
