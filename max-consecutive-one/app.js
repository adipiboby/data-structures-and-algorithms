function consecutive(nums){
    let one=0;
    let non1=0
    for(let i = 0 ;i<nums.length;i++){
     if(nums[i]==1){
        one++
     }else{
    non1=Math.max(one,non1)
      one=0;
     }
     
     
    }
     return Math.max(one,non1)
}

console.log(consecutive([1,1,0,1,1,1]))