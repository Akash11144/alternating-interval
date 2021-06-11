var t=document.getElementById("cnt");
var incrementValue=0;
var s=Number(t.innerText);
if(s>0)
    incrementValue=false;
else
    incrementValue=true;
var i=window.setInterval(function(){
    if(incrementValue==false){
        if(t.innerText==1)
              incrementValue=true;
        --t.innerText;
    }
    else if(incrementValue==true){
        if(t.innerText>=9)
              incrementValue=false;
        ++t.innerText;
    }
},500);
