// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// var twoSum = function(nums, target) {
//     let curIndex = 0
//     let arr = []
//     while(curIndex < nums.length - 1){
//         nums.slice(curIndex + 1).map((i, index) => {
//         if(nums[curIndex] + i == target){
//             arr = [index, index + 1]
//         }else{
//             curIndex += 1
//         }
//     })
//     }
//     return arr
// };

var twoSum = function (nums, target) {
    let result
    nums.map((i, iIndex) => {
        nums.map((j, jIndex) => {
            if (i + j === target && iIndex !== jIndex) {
                result = [jIndex, iIndex];
            }
        })
    })
    console.log(result)
    return result
};

// var twoSum = function (nums, target) {
//     let arr = nums
//     let curIndex = 0

//     let result = []

//     const loop = (ind) => {
//         nums.slice(ind + 1).map((i, index) => {
//             if (arr[ind] + i == target) {
//                 result = [ind, index]
//             } else {
//                 curIndex += 1
//                 loop(ind)
//             }
//         })
//     }

//     loop(curIndex)

//     console.log(result)
//     return result
// };

let a = [2, 7, 11, 15]

twoSum(a, 9)