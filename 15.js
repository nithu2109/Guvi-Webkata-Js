function compare(){
    var i1=parseInt(document.getElementById("in1").value);
    var i2=parseInt(document.getElementById("in2").value);
    if(i1<i2){
        document.getElementById("result").innerHTML="true";
    }
    else{
        document.getElementById("result").innerHTML="false";
    }
}