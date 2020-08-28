def first_not_repeating_character(s):
    # split string into array
    arr = [c for c in s]

    print(arr)

    # variable for result
    result = '';

    # array for letters counted already
    counted = []

    for i in range(len(arr)):
        if arr.count(arr[i]) == 1:
            result = arr[i]
            return

    print("RESULT: ", result)

    # for i in range(len(arr)):
    #     let counter = 0;

    #     # if current item in arr has not been counted
    #     if (!counted.includes(arr[i])) {
    #         # map through arr
    #         arr.map(item => {
    #             # if current main item is equal to inner map item
    #             if (arr[i] === item) {
    #                 # increment counter for letter
    #                 counter += 1
    #             }
    #         })
    #     }

    #     # if counter is less than 2
    #     if (counter < 2) {
    #         # set result to current arr item
    #         result = arr[i];
    #         # leave loop
    #         break
    #     }
    # }

    # # if result is empty string replace it with "_"
    # if (result == '') {
    #     result = '_'
    # }

    # console.log(result)
    # return result;

s = 'zaaanshdoccokknefql'

first_not_repeating_character(s)