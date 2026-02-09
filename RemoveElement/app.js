


let removeElement = function(nums, val) {
        let x=0
    for(let i=0;i< nums.length;i++){
        if(nums[i]!=val){
         
         nums[x]=nums[i]
         x++

        }
    }
    return nums
};

let data = removeElement([1,2,3,5,3,6,7,3,4,5,9,3],9)
console.log(data)