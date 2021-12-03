let arr =  [2, 3, 6, 7, 10, 1]
let helper;
let save;


for (let i = 1; i < arr.length; i +=1){
    helper = arr[i];
    if (arr[i-1] > helper){
        save = arr[i-1]
    }
}

console.log(arr.indexOf(save))