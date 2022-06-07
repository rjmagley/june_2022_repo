class Department():

    def __init__(self, name):
        self.name = name
        self.employees = []

    def add_employee(self, employee):
        if employee not in self.employees:
            self.employees.append(employee)

    def print_employee_info(self):
        if not self.employees:
            print(f"No employees in {self.name}")
        for employee in self.employees:
            print(f"{employee.first_name[0]}. {employee.last_name} - Salary: {employee.salary}")

    def __str__(self):
        if len(self.employees) == 1:
            return f"{self.name} ({len(self.employees)} employee)"
        else:
            return f"{self.name} ({len(self.employees)} employees)"

class Employee():

    def __init__(self, first_name, last_name, salary, department):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary
        self.department = department
        self.department.add_employee(self)

    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def set_salary(self, new_salary):
        if (type(new_salary) == int):
            if (new_salary > 40000 and new_salary < 200000):
                self.salary = new_salary

department_a = Department("Sales")
department_b = Department("Engineering")
department_c = Department("HR")
department_d = Department("Facilities")
department_e = Department("Legal")

departments = [department_a, department_b, department_c, department_d, department_e]

new_employee = Employee("Aaron", "Jackson", 102000, department_b)
new_employee2 = Employee("Bethany", "Smith", 87000, department_a)
new_employee3 = Employee("Chad", "Adamsson", 54000, department_c)
new_employee4 = Employee("Devin", "Andersson", 61000, department_d)
new_employee5 = Employee("Erin", "Jones", 54000, department_b)

for department in departments:
    print(department)
    department.print_employee_info()