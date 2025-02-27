document.addEventListener('DOMContentLoaded',function(){
    const questions = document.querySelectorAll('.faq__question');
    questions.forEach((question)=>{
        question.addEventListener('click',(event)=>{
            const answer = question.nextElementSibling;
            answer.classList.toggle('faq__answer');  
            const caret = event.currentTarget.querySelector('.caret'); 
            caret.classList.toggle('caret--up');
        })
    })
})