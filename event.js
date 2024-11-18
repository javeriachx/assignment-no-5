document.querySelector(".parent").addEventListener("click",function(event){
    console.log("Parent clicked");
});
document.querySelector('.child').addEventListener('click', function(event) {
    console.log('Child clicked');
    // event.stopPropagation()
    ;});
   
    document.querySelector('.grandChild').addEventListener('click', function(event) {
        console.log('Grandchild clicked');
        event.stopPropagation();
    });
