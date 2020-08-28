const uncover_spy = (n, trust) => {
    let spies = []
    let people = {}
    let peopleArr = []

    for (let i = 1; i <= n; i++) {
        people[i] = []
        peopleArr.push(i)
    }

    console.log("PEOPLE: ", people)

    /// add people they trust
    trust.map((i, index) => {
        people[i[0]].push(i[1])
    })

    console.log("PEOPLE W/TRUSTS: ", people)

    /// add people who dont trust anyone to spies
    peopleArr.map((i, index) => {
        // console.log("people[index]", people[index + 1])
        if (people[index + 1].length == 0) {
            spies.push(i)
        }
    })

    console.log("SPIES: ", spies)


    spies.map((i, index) => {
        let count = 0

        trust.map(item => {
            if (item[1] == i) {
                count += 1
            }
        })

        if (count < n - 1) {
            spies.splice(index, 1);
        }
    })

    console.log("SPIES AFTER FILTER: ", spies)

    if (spies.length == 1) {
        console.log("ANSWER: ", spies)
        return spies[0]
    } else {
        console.log("ANSWER: ", -1)
        return -1
    }
}

uncover_spy(5, [[1, 2], [3, 2], [4, 2], [5, 2], [4, 5], [1, 5]])