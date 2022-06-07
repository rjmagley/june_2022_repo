def sample_function_name(parameter_a, parameter_b):
    # creates a new list
    # adds numbers to that list from parameter_a to parameter_b
    # if parameter_a is greater than parameter_b, add numbers to the list from parameter_b to parameter_a
    output_list = []

    # if parameter_a > parameter_b:
    #     temp = parameter_b
    #     parameter_b = parameter_a
    #     parameter_a = temp

    if parameter_a > parameter_b:
        smaller = parameter_b
        larger = parameter_a

    else:
        smaller = parameter_a
        larger = parameter_b

    for number in range(smaller, larger+1):
        output_list.append(number)

    return output_list

print(sample_function_name(4, 9)) # [4, 5, 6, 7, 8, 9]
print(sample_function_name(9, 4)) # [4, 5, 6, 7, 8, 9]