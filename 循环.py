# 循环语句——for语句 可迭代对象
for i in range(5):
    print(f"For{i}")

i=0 #循环变量要初始化，否则会死循环
while i < 5:
    print(f"While{i}")
    i+=1 # 循环变量要更新，否则会死循环
