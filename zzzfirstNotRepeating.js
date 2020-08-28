function first_not_repeating_character(s) {
    /// split string into array
    let arr = s.split('');

    /// variable for result
    let result = '';

    /// array for letters counted already
    let counted = []

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;

        /// if current item in arr has not been counted
        if (!counted.includes(arr[i])) {
            /// map through arr
            arr.map(item => {
                /// if current main item is equal to inner map item
                if (arr[i] === item) {
                    /// increment counter for letter
                    counter += 1
                }
            })
        }

        /// if counter is less than 2
        if (counter < 2) {
            /// set result to current arr item
            result = arr[i];
            /// leave loop
            break
        }
    }

    /// if result is empty string replace it with "_"
    if (result == '') {
        result = '_'
    }

    console.log(result)
    return result;
}

const s = 'zaaanshdoccokknefql'

first_not_repeating_character(s)
