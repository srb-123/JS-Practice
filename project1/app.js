const closedFace=document.querySelector('.closed');
const openFace=document.querySelector('.open');
//Add EventListener
closedFace.addEventListener('click',e=>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
   
})
openFace.addEventListener('click',e=>{
    if(openFace.classList.contains('open')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
   
})
