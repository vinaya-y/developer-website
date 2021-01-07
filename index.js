mybtn = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybtn.style.display = "block"
    }else{
        mybtn.style.display = "none"
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
}