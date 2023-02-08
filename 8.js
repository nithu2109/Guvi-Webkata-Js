function getSelectedOption(){
    var va=document.getElementsByTagName("select")[0].value;
    document.getElementById("selectedOption").innerHTML=va;
}
getSelectedOption();