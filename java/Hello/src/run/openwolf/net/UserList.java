package run.openwolf.net;

import java.util.List;
import java.util.ArrayList;

public class UserList {
	public static List<User> UserList = new ArrayList<>();
	static {
		UserList.add(new User("admin","admin"));
		UserList.add(new User("001","001"));
		UserList.add(new User("002","002"));
		UserList.add(new User("003","003"));
		UserList.add(new User("004","004"));
	}
}
