$(function(){
    var updownslider=0;
    var slidePosition;
    setInterval(function(){
        if(updownslider<2){
            updownslider++;
        }else{
            updownslider=0;
        }slidePosition=updownslider*(-300)+"px";
        $(".youjinslider").animate({top:slidePosition},400);
    },3000);
})