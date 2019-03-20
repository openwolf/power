use strict;
use warnings;
while(1){
	print("请输入点字符\n");
	chomp(my $line = <STDIN>);
	if($line eq ''){
		print("输入的空字符\n");
	}else{
		print("$line\n");
	}
}