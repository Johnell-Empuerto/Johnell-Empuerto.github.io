const content = document.querySelector('.question');
const modal = document.querySelector('.modal-box');
const btn = document.querySelector('.btn');

content.addEventListener('click', function(){
    modal.style.display ="block";
});

btn.addEventListener('click', function(){
    modal.style.display= "none";
});

window.addEventListener('click', function(e){
    if (e.target === modal){
        modal.style.display= "none";
    }
});