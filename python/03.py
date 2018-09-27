n = int(input('输入一个秒数'))
h = int(n / 3600)
m = int((n - h * 3600) / 60)
s = n % 60
print(h, m, s)
