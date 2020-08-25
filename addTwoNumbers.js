var addTwoNumbers = function (l1, l2) {
    let arr = []
    let cur = l1

    while (cur.next != null) {
        arr.push(cur.val)
        cur = cur.next
    }
    arr.push(cur.val)

    let reverse = arr.reverse()
    let first = reverse.join('')

    let secArr = []
    cur = l2

    while (cur.next != null) {
        secArr.push(cur.val)
        cur = cur.next
    }
    secArr.push(cur.val)

    reverse = secArr.reverse()
    let second = reverse.join('')

    let sum = first + second

    let sumArr = sum.split('')

    let revSumArr = sumArr.reverse()

    let list = []

    revSumArr.map((i, index) => {
        if (revSumArr[index + 1]) {
            list.push(new ListNode(i, revSumArr[index + 1]))
        } else {
            list.push(new ListNode(i, undefined))
        }
    })

    console.log(list)
};