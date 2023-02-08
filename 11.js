function checkString(){
    var str=document.getElementById("in1").value;
    var ans =str.includes("Java");
    document.getElementById("result").innerHTML=ans;
    
}