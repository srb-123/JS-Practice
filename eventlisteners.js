const grandparent=document.querySelector('.grandparents');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');
//Basic Event Listener Syntax
/*
grandparent.addEventListener('click',e=> {
    console.log('Grandparent is clicked');
})
parent.addEventListener('click',e=> {
    console.log('parent is clicked');
})
child.addEventListener('click',e=> {
    console.log('child is clicked');
})*/
//The codes above prints child,parents and grandparents in a sequence when we click child coz
//child is inside parent and parent is inside gp.This is called event bubbling . Here it goes from
//down to up

/*Event Capturing*/
/*It prints from gp to child i.e from top to bottom*/
grandparent.addEventListener('click',e=> {
    console.log('Grandparent is clicked');
},{capture:true})
parent.addEventListener('click',e=> {
    console.log('parent is clicked');
},{capture:true})
child.addEventListener('click',e=> {
    console.log('child is clicked');
},{capture:true})