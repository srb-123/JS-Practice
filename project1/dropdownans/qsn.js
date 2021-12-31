const question1=document.querySelector(".Qsn1");
const question2=document.querySelector(".Qsn2");
const question3=document.querySelector(".Qsn3");
const question4=document.querySelector(".Qsn4");
const answer1=document.querySelector('.ans1');
const answer2=document.querySelector('.ans2');
const answer3=document.querySelector('.ans3');
const answer4=document.querySelector('.ans4');
const icon=document.querySelectorAll('.fa');

question1.addEventListener('click',()=>{
    if (answer1.classList.contains('hidden')){
        answer1.classList.remove('hidden');
        icon[0].classList.remove('fa-plus');
        icon[0].classList.add('fa-minus');
        
        
    }
    else{
        answer1.classList.add('hidden');
        icon[0].classList.add('fa-plus');
        icon[0].classList.remove('fa-minus');

    }
})
question2.addEventListener('click',()=>{
    if (answer2.classList.contains('hidden')){
        answer2.classList.remove('hidden');
        icon[1].classList.remove('fa-plus');
        icon[1].classList.add('fa-minus');2
        
        
    }
    else{
        answer2.classList.add('hidden');
        icon[1].classList.add('fa-plus');
        icon[1].classList.remove('fa-minus');

    }
})
question3.addEventListener('click',()=>{
    if (answer3.classList.contains('hidden')){
        answer3.classList.remove('hidden');
        icon[2].classList.remove('fa-plus');
        icon[2].classList.add('fa-minus');
        
        
    }
    else{
        answer3.classList.add('hidden');
        icon[2].classList.add('fa-plus');
        icon[2].classList.remove('fa-minus');

    }
})
question4.addEventListener('click',()=>{
    if (answer4.classList.contains('hidden')){
        answer4.classList.remove('hidden');
        icon[3].classList.remove('fa-plus');
        icon[3].classList.add('fa-minus');
        
        
    }
    else{
        answer4.classList.add('hidden');
        icon[3].classList.add('fa-plus');
        icon[3].classList.remove('fa-minus');

    }
})

