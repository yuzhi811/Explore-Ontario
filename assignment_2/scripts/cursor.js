let outter = document.querySelector('.outter-cursor');
let inner = document.querySelector('.inner-cursor');


//follows the cursor
document.addEventListener('mousemove', function(e){
    outter.style.left = e.clientX + "px";
    outter.style.top = e.clientY + "px";
    inner.style.left = e.clientX + "px";
    inner.style.top = e.clientY + "px";
})


//read all anchor tags
let hyperlinks = Array.from(document.querySelectorAll('a'));

//add class name grow to inner
hyperlinks.forEach((link) => {
    link.addEventListener('mouseover', ()=>{
        inner.classList.add('grow');
    })
    link.addEventListener('mouseleave', ()=>{
        inner.classList.remove('grow');
    })
})
let label = Array.from(document.querySelectorAll('label'));

//add class name grow to inner
label.forEach((checked) => {
    checked.addEventListener('mouseover', ()=>{
        inner.classList.add('grow');
    })
    checked.addEventListener('mouseleave', ()=>{
        inner.classList.remove('grow');
    })
})

let burgerIcon = querySelector('#burger-button');
//add class name grow to inner

burgerIcon.addEventListener('mouseover', () => {
    checked.addEventListener('mouseover', ()=>{
        inner.classList.add('grow');
    })
    checked.addEventListener('mouseleave', ()=>{
        inner.classList.remove('grow');
    })
})