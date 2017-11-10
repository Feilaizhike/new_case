
    var myList = document.getElementById("banner_pic_list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");


    function animation(offSet){
        var newLeft =  parseInt(myList.style.left)+offSet;
        myList.style.left = newLeft+"px";
        if(newLeft > -1920){
            myList.style.left = -5760 + "px";
        }
        if(newLeft < -5760){
            myList.style.left = -1920 + "px";
        }
    }
    next.onclick = function(){
        animation(-1920);
    }
    prev.onclick = function(){
        animation(1920);
    }
