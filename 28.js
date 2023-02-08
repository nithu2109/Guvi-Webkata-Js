function fun(){
    var str=document.getElementById("in1").value;
    let arr=str.split(',');
    let arr2=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>=5){
            arr2.push(arr[i]);
        }
    }
    arr2.sort(function(a,b){
        return a-b;
    });
    document.getElementById("result").innerHTML=arr2;
}

