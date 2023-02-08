function displaySelectedOption(){
    var arr=document.getElementsByName("option");
    for(var i=0;i<arr.length;i++){
        if(arr[i].checked){
            document.getElementById("selectedOption").innerHTML=arr[i].value;
        }
    }  
}
displaySelectedOption();