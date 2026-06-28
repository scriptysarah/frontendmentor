const questions = document.querySelectorAll('.question');
tabindex="0"
questions.forEach(question => {
    question.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active'); 
                item.nextElementSibling.style.maxHeight = null; 
            }
        });

        question.classList.toggle('active');

        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});