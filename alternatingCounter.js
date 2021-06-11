var t=document.getElementById("cnt");
var chk=0;
var s=Number(t.innerText);
if(s>0)
    chk==0;
else
    chk==1;
var i=window.setInterval(function(){
    if(chk==0){
        if(t.innerText==1)
            chk=1;
        --t.innerText;
    }
    else if(chk==1){
        if(t.innerText>=9)
            chk=0;
        ++t.innerText;
    }
},500);
