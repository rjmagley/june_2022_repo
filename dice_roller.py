from random import randint

# function to roll dice
# roll some number of dice, those dice have a specific number of sides
# 1 - number of sides
# return the sum of all dice rolled

def roll_dice(sides, number = 1):
    result = 0
    
    for i in range(0, number):
        result = result + randint(1, sides)

    return result