
# problem 1
print("Hello, World!")

# problem 2

n = int(input())
def weird_or_not(n):
    if n % 2 == 1:
        return "Weird"
    elif 2 <= n <= 5:
        return "Not Weird"
    elif 6 <= n <= 20:
        return "Weird"
    elif n > 20:
        return "Not Weird"
print(weird_or_not(n))

# problem 3
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

# problem 4
a = int(input())
b = int(input())
print(a//b)
print(a/b)

# problem 5
n = int(input())
for i in range(n):
    print(i*i)

# problem 6
def is_leap(year):
    leap = False

    if year % 400 == 0:
        leap = True
    elif year % 100 == 0:
        leap = False
    elif year % 4 == 0:
        leap = True
    else:
        leap = False

    return leap


year = int(input())
print(is_leap(year))

# problem 7
n = int(input())
def print_consecutive_numbers(n):
    for i in range(1, n+1):
        print(i, end='')

print_consecutive_numbers(n)

# problem 8
def find_runner_up_score(scores):
    unique_scores = list(set(scores))
    unique_scores.sort()
    return unique_scores[-2]

sample_scores = [2, 3, 6, 6, 5]
print(find_runner_up_score(sample_scores))

# problem 9
n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
query_name = input()

result = 0
for i in student_marks[query_name]:
    result += i
average = result / len(student_marks[query_name])
print("{:.2f}".format(average))

# problem 10
def swap_case(s):
    return s.swapcase()
s = input()
result = swap_case(s)
print(result)