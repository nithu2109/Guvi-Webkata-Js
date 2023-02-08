var array=[40,100,1,5,25,10];
array.sort(function(a,b){
    return a-b;
});
document.getElementById("demo").innerHTML=array;