//Tìm một dãy con của một mảng mà tổng các phần tử trong dãy con này bằng 0

let arr =[8,-2,-1,3,4,-3];
let visit = [0,0,0,0,0,0];
let res = [];
function Try(sum, tmp){
    for(let j = 0; j < arr.length; j++){
        if(visit[j] === 0){
            tmp.push(arr[j]);
            visit[j] = 1;
            if(sum + arr[j] === 0){
                res.push([...tmp])
            }
            Try(sum + arr[j], tmp);
            visit[j] = 0;
            tmp.pop();
        }
    }
}

Try(0, []);
console.log(res)