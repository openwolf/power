use strict;
use warnings;

while(<STDIN>){
	chomp;
	if(/nonono/){
		print "\tmatch\n";
	}else{
		print "\tDoesn't match\n";
	}
}