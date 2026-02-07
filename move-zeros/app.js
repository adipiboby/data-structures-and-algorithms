 
 function movezero(nums){
let p1=0;
    for(let i=0;i<nums.length;i++){
     if(nums[i]!==0){
       nums[p1]=nums[i]
       p1++
     }
      }
     for(let j=p1;j<nums.length;j++){
        nums[p1]=0
        p1++
     }
     return nums
 }
 
console.log(movezero([0,1,0,3,12]))