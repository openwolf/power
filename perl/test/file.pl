use strict;
use warnings;

my $filename = 'a.txt';
open(my $fh,'>',$filename) or die "Could not open file '$filename' $!";
print($fh "My first report generated by perl\n");
say $fh "hello";
close $fh;
print "done\n";