const slider = document.querySelector('.items');
// flag boolean variable, depending on clicking or not
let isDown = false;
// when user initially clicks down
let startX;
// slider scrollLeft
let scrollLeft;

slider.addEventListener('mousedown',(e) => {
    isDown = true;
    slider.classList.add('active'); // css에 작성된 active 설정 활성화
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave',() =>{
    isDown = false;
    slider.classList.remove('active');
}); 
slider.addEventListener('mouseup',() => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) =>{
    /*
        stop the function from running if isDown is false
    */
    if (!isDown) return; // 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // for every px moved, we scroll the slider 3px
    slider.scrollLeft =  scrollLeft - walk;
}); 

