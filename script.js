    var myList = document.getElementById("banner_pic_list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var button = document.getElementById('button').getElementsByTagName('span');
    var index=1;
    function showButton(){
        for (var i = 0; i < button.length; i++) {
            if (button[i].className == "on") {
                button[i].className = "";
                break;
            }
        }
        button[index - 1].className = "on";
    }

    function animation(offSet){
        var newLeft =  parseInt(myList.style.left)+offSet;
        myList.style.left = newLeft+"px";
        if(newLeft > -1920){
            myList.style.left = -3840 + "px";
        }
        if(newLeft < -3840){
            myList.style.left = -1920 + "px";
        }
    }
    next.onclick = function(){
        if (index == 2) {
            index = 1;
        }
        else{
            index +=1;
        }
        showButton();
        animation(-1920);
    }
    prev.onclick = function(){
        if (index == 1) {
            index = 2;
        }
        else{
            index -= 1;
        }
        showButton();
        animation(1920);
    }
    for (var i = 0; i < button.length; i++) {
        button[i].onclick = function(){
            if (this.className=="on") {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            index = myIndex;
            showButton();
            if(index===1){
                animation(-3840);
            }
            else if(index===2){
                animation(-1920);
            }
        }
    }

    window.addEventListener('scroll',winScroll);
    function winScroll(e){
        var myScrollTop = pageYOffset;
        var sideBar = document.getElementById("sideBar");
        if (myScrollTop > 860) {
            sideBar.style.display = "block";
        }else{
            sideBar.style.display = "none";
        }
    }
