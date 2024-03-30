def xor(a, b):
    print(a)
    print(b)
    return int(a != b)

print(xor(*[i for i in input().split()]))