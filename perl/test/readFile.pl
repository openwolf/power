use strict;
use warnings;
use autodie;

my $file = 'a.txt';
open(my $fh,'<',$file);
while (<$fh>) {
	print($_);
}
close($fh);