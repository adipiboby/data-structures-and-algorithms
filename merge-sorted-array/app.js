/*You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.*/


let arr1=[1,2,3,0,0,0]
const m=Math.ceil((arr1.length/2))
const arr2=[2,5,6]
const n=arr2.length

let arrCopy1=arr1.slice(0,m)
console.log(arrCopy1)
let p1=0
let p2=0
arrCopy1=arr1.slice(0,m)
for(let i=0;i<(m+n);i++){
if(p2>=n||arrCopy1[p1]<arr2[p2]&&p1<m){
      arr1[i]=arrCopy1[p1]
      p1++
}else{
    arr1[i]=arr2[p2]
    p2++
}
}

console.log(arr1)