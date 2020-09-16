var lis = document.querySelectorAll("li");


for(i = 0; i < lis.length; i++){
    //changes color of element on mouseover
    lis[i].addEventListener("mouseover", function(){
        this.classList.add ("selected");
    });
    // changes color after mouse is not on element
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove ("selected");
    });
    // adds done class toggle
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}
