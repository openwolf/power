$var0 = 1;
$var1 = 2;
$var2 = 3;

$var3 = $var0 / $var1;
print("$var3\n");
$var3 = $var0 / $var2;
print("$var3\n");
$var3 = $var1 ** $var2;
print("$var3\n");
print("-----\n");


$a = 0;
$b = 1;
$c = 0;

$result = $a==$b;
print("\$a == \$b,$result\n");
$result = $a != $b;
print("\$a != \$b,$result\n");
$result = $a <=> $b;
print("\$a <=> \$b,$result\n");
$result = $a <=> $c;
print("\$a <=> \$c,$result\n");