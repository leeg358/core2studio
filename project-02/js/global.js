

window.addEventListener("load",function(){
    let mouseCursor = document.querySelector(".cursor")
    let bodyText = document.querySelector(".body-text")

    window.addEventListener("mousemove", cursor)

    function cursor(e){
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";

        
        
    }



  // Added event listener to the scroll 
  window.addEventListener('scroll', 
  moveScrollIndicator); 

// Getting scrollIndicator element by ID 
const scrollIndicatorElt =  
document.getElementById('scrollIndicator'); 

// Height of entire web page - height 
// of viewable portion of browser 
const maxHeight =  
window.document.body.scrollHeight  
- window.innerHeight; 

function moveScrollIndicator(e) { 

// Calculating width of the  
// scrollIndicator element 
const percentage =  
  ((window.scrollY) / maxHeight) * 100; 

// Pixels scrolled by the user  
// to total scrollable Pixels 
scrollIndicatorElt.style.width 
       = percentage + '%'; 
} }


)