const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop; // 해당 요소가 Top 위치에서 얼마나 떨어져 있는가

function fixNav() {

    /*
    window.scrollY = 현재 창(window)이 Top 위치에서 얼마나 떨어져 있는가
    현재 창이 Nav 위치보다 크거나 작다면 Nav 태그를 고정하는 클래스 추가(태그 고정 요소는 style.css에 있음)
    */
    if (window.scrollY >= topOfNav) {
        // add the height of the nav to the body just before the nav becomes fixed and removed from the normal flow
        document.body.style.paddingTop = nav.offsetHeight + 'px'; 
        document.body.classList.add('fixed-nav');
    } else {
        // reset the height of the body when the nav loses fixed state
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}
    
window.addEventListener('scroll', fixNav);