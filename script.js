// navigation bar buttons to make responsive

const items = document.getElementById("menuButton");
function showMenu() {
  items.style.right = "0px";
}
function hideMenu() {
  items.style.right = "-240px";
}


// scroll to top button 

var scrollBtn = document.getElementById('scroll');

window.addEventListener('scroll', () => {

    let halfHeight = document.documentElement.scrollHeight / 2;

    if (document.body.scrollTop > halfHeight || document.documentElement.scrollTop > halfHeight){
        scrollBtn.classList.remove("hidden", "pointer-events-none");
        scrollBtn.classList.add("opacity-80");
    } else {
        scrollBtn.classList.remove("opacity-80");
        scrollBtn.classList.add("hidden", "pointer-events-none");
    }
});


scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});