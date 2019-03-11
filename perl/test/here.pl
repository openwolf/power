use strict;
use warnings;
$a = 10;
$str = <<"EOF";
这里开始写点文字，好像可以使用字符串和变量等等
"双引号"
'单引号'
a = $a
EOF
print "$str\n";

$num0 = 0.1;
$num1 = 0.2;
print($num0+$num1);

$str = '
	我开始了

	开始了

	始了

	了
';
print($str);