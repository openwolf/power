use strict;
use warnings;

# my $var = '001';
# my $reference = \$var;
# print('$reference='.$reference);
# print("\n");
# print('${$reference}='.${$reference});
# print("\n");
# print('$$reference='.$$reference);
# print("\n");

my %owner0 = (
	"name" => "aaa",
	"DOB" => "1822-12-25",
);
my %owner1 = (
	"name" => "bbb",
	"DOB" => "1822-3-12",
);
my @owners = (\%owner0,\%owner1);

my %acount = (
	"number" => "12345678",
	"opened" => "2000-04-01",
	"owners" => \@owners,
);

my $acount0 = {
	"number" => "123456789",
	"opened" => "2019-3-12",
	"owners" =>[
		{
			"name" => "aaa",
			"DOB" => "1980-01-01"
 		},
		{
			"name" => "bbb",
			"DOB" => "2017-03-15"
		}
	]
};
print("\t","name","\t","DOB");
print("\t",$acount0->{"owners"}->[0]->{"name"},"\t",$acount0->{"owners"}->[0]->{"DOB"});
print("\t",$acount0->{"owners"}->[1]->{"name"},"\t",$acount0->{"owners"}->[1]->{"DOB"});