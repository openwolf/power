package run.openwolf.formatter;

import java.util.Formatter;

public class Demo0 {
	private double total = 0;
	private Formatter f = new Formatter(System.out);
	private final int NAME = 30;
	public void printTitle() {
		f.format("%-"+NAME+"s %5s %10s\n", "Item", "Qty", "Price");
		f.format("%-"+NAME+"s %5s %10s\n", "----", "---", "-----");
	}

	public void print(String name, int qty, double price) {
		f.format("%-"+NAME+"."+NAME+"s %5d %10.2f\n", name, qty, price);
		total += price;
	}

	public void printTotal() {
		f.format("%-"+NAME+"s %5s %10.2f\n", "Tax", "", total * 0.06);
		f.format("%-"+NAME+"s %5s %10s\n", "", "", "-----");
		f.format("%-"+NAME+"s %5s %10.2f\n", "Total", "", total * 1.06);
	}

	public static void main(String[] args) {
		Demo0 d = new Demo0();
		d.printTitle();
		d.print("Jack's Magic Beans", 4, 4.25);
		d.print("Princess Peas", 3, 5.1);
		d.print("Three Bears Porridge", 1, 14.29);
		d.printTotal();
	}
}
