use strict;
use warnings;
$key = "aaa:";
$val0 = "bbb";
$val1 = 15;
$val2 = 15.123;
@arr = (0,1,2,3,4);
%data = ('key'=>"val",'aaa'=>"bbb");

$group0 = $key . $val0;
$group1 = $key . $val1;
$group2 = $key . $val2;
$group3 = $key . @arr;
$group4 = $key . %data;

print("$group0\n");
print("$group1\n");
print("$group2\n");
print("$group3\n");
print("$group4\n");
