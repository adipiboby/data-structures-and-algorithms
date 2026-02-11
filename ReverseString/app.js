let arr=["h","i","m","a","n"]


for(let i=0;i<arr.length/2;i++){
temp=arr[arr.length-1-i]
arr[arr.length-1-i] =arr[i]
arr[i]=temp
}
console.log(arr)