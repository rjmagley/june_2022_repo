# object-oriented programming focuses on melding DATA with BEHAVIOR

# classes of objects

employee1 = {'first_name': 'Aaron', 'last_name': 'Johnson', 'salary': 60000}
employee2 = {'first_name': 'Bradley', 'last_name': 'Smith', 'salary': 72000}
employee3 = {'first_name': 'Charlie', 'last_name': 'Adams', 'salary': 81000}

employees = [employee1, employee2, employee3]

for employee in employees:
    print(f"{employee['first_name']} {employee['last_name']} - {employee['salary']}")

employee3['salary'] = 960000

for employee in employees:
    employee['salary'] = employee['salary'] * 1.05
    print(f"{employee['first_name']} {employee['last_name']} - {employee['salary']}")

