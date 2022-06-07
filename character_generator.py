from dice_roller import roll_dice

# generate a new D&D character, Gygax-style
# 3d6 dice rolls down the board for each of the six stats:
# STR, DEX, CON, WIS, INT and CHA

def generate_new_character():

    character = {'STR': None,
        'DEX': None,
        'CON': None,
        'WIS': None,
        'INT': None,
        'CHA': None
    } # dictionary of six key-value pairs
    # {'STR': 8, 'DEX': 16 ...}

    for stat in character.keys():
        dice_roll = roll_dice(6, 3)
        character[stat] = dice_roll

    return character

def generate_new_character2():

    character = {} # dictionary of six key-value pairs
    # {'STR': 8, 'DEX': 16 ...}

    stats = ['STR', 'DEX', 'CON', 'WIS', 'INT', 'CHA']

    for stat in stats:
        character[stat] = roll_dice(6, 3)

    return character

def generate_new_character3():

    character = {'STR': roll_dice(6, 3),
        'DEX': roll_dice(6, 3),
        'CON': roll_dice(6, 3),
        'WIS': roll_dice(6, 3),
        'INT': roll_dice(6, 3),
        'CHA': roll_dice(6, 3)
    } # dictionary of six key-value pairs
    # {'STR': 8, 'DEX': 16 ...}

    return character

def generate_new_character4(sides = 6, number = 3):

    character = {} # dictionary of six key-value pairs
    # {'STR': 8, 'DEX': 16 ...}

    stats = ['STR', 'DEX', 'CON', 'WIS', 'INT', 'CHA']

    for stat in stats:
        character[stat] = roll_dice(sides, number)

    return character

print(generate_new_character3())
