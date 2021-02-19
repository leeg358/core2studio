window.addEventListener("load",function(){
    let mouseCursor = document.querySelector(".cursor")
    let bodyText = document.querySelector(".body-text")

    window.addEventListener("mousemove", cursor)

    function cursor(e){
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";

        
        
    }

}


)