use strict;
use warnings;

sub sub0{
	print("hello world!");
	my $var0 = 11;
}
# &sub0();

sub sum{
	print("@_\n");
	my $sum = 0;
	foreach (@_) {
		$sum += $_;
	}
	print("$sum\n");
}
my @arr = (1..100);
&sum(@arr,1);