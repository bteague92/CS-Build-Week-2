var containsDuplicate = function (nums) {
    let cont = false
    //create seperate array
    let arr = []
    //map through original, checking if the sperate array contains item
    nums.map(i => {
        if (arr.includes(i)) {
            //if seperate array contains item, return true
            cont = true
        } else {
            //if not, push item to seperate array
            arr.push(i)
        }
    })
    return cont
};