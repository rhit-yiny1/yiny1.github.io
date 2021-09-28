function main() {

    const container = document.querySelector('.triggerElement');
    container.onmouseover = mouseOver();
    container.onmouseout = mouseOut();

    

    function mouseOver() {
        element = document.querySelector(".triggerElement");
        element.addEventListener("mouseover",function(){
            this.style.background = "#FFF238";
        });

    }
    function mouseOut() {
        element = document.querySelector(".triggerElement");
        
        element.addEventListener("mouseout",function(){
            this.style.background = "";
        });
    }
}

main();