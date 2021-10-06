
function fun(){
    var a = f1.t1.value;
    var b = f1.t2.value;
    var c = f1.t3.value;
    var d =f1.t4.value;
    
    if(a == ""){
    alert("Please enter name");
    f1.t1.focus();
    }
    else if(!(isNaN(a))){
    alert("please enter a name not number");
    f1.t1.focus();
    }
    else if(b == ""){
    alert("Please enter email");
    f1.t2.focus();
    }
    else if(!(isNaN(b))){
    alert("please enter a name not number");
    f1.t2.focus();
    }
    else if(c == "")
    {
    alert("Please Enter a Number 10 digits only");
     f1.t3.focus();
    }
    else if(c.length != 10)
    {
    alert("Please Enter a Number 10 digits only");
     f1.t3.focus();
    }
    else if(d == "")
    {
    alert("Please select any one");
    
    }
    else {
    alert("data submited successfully");
    f1.submit();
    }
    
    }