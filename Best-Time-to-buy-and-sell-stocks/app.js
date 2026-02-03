
function buy(arr){
    min=arr[0]
    max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]-min>max){
            max=arr[i]-min
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return max
}
console.log(buy([7,1,5,3,6,4]))