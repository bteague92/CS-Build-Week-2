const create = (starting_num, num_rows) => {
    let main = [[starting_num]]
    for (let i = num_rows - 1; i > 0; i--) {
        main.push([])
    }

    let row = 0

    let temp = []

    while (row <= num_rows) {
        if (main[row].length == 1) {
            temp.push(main[row][0]) * 2
            main[row + 1] = temp
            row += 1
        } else if (main[row].length == 2) {
            main[row].map((i, index) => {
                if (index == 0) {
                    temp.push(i)
                    temp.push(i + main[row][index + 1])
                } else {
                    temp.push(i)
                }
            })
            main[row + 1] = temp
            temp = []
            row += 1
        } else {
            main[row].map((i, index) => {
                if (index == 0) {
                    temp.push(i)
                    temp.push(i + main[row][index + 1])
                } else if (index == main[row].length - 2) {
                    temp.push(i + main[row][index + 1])
                    temp.push(main[row][index + 1])
                } else {
                    temp.push(i + main[row][index + 1])
                }
            })
            main[row + 1] = temp
            temp = []
            row += 1
        }
    }
    console.log(main)
}

create(1, 5)