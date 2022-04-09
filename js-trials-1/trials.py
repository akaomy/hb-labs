"""Python functions for JavaScript Trials 1."""


def output_all_items(items):
    """ print all items in a given list """
    res = [print(item) for item in items]
    return res

# output_all_items([1, 'hello', True])

def get_all_evens(nums):
    """ print all even items in a given list of nums """
    res = [print(num) for num in nums if num % 2 == 0]
    return res

# get_all_evens([1, 30, 10, 300])

def get_odd_indices(items):
    """ Given an array, return all elements at odd numbered indices. """
    res = [print(item) for index, item in enumerate(items) if index % 2 != 0]
    return res

# get_odd_indices([1, 30, 10, 300, 344, 677])

def print_as_numbered_list(items):
    """ Given an array, output a numbered list. """
    i = 1
    for item in items:
        print(f'${i}. ${item}')
        i += 1

# print_as_numbered_list([1, 30, 10, 300, 344, 677])
# function getRange(start, stop) {
#   const nums = [];

#   for (let num = start; num < stop; num += 1) {
#     nums.push(num);
#   }
#   return nums;
# }
def get_range(start, stop):
    nums = []
    num = start

    for (i in some_list):
        nums.append(i)

get_range()

def censor_vowels(word):
    pass  # TODO: replace this line with your code


def snake_to_camel(string):
    pass  # TODO: replace this line with your code


def longest_word_length(words):
    pass  # TODO: replace this line with your code


def truncate(string):
    pass  # TODO: replace this line with your code


def has_balanced_parens(string):
    pass  # TODO: replace this line with your code


def compress(string):
    pass  # TODO: replace this line with your code
