const submitBtn = document.querySelector('.submit-btn');
const card1 = document.querySelector('.card')
const card2 = document.querySelector('.card-2')
const ratingBtn = document.querySelectorAll('.rate-btn')
const score = document.querySelector('.score');
let selection = 0;

submitBtn.addEventListener('click', onSubmit);
ratingBtn.forEach(btn => {
    btn.addEventListener('click', setSelection);
});

function onSubmit(){
    card1.classList.add('hide');
    score.textContent = selection;
    card2.classList.remove('hide');
}

function setSelection(event) {
    ratingBtn.forEach(btn =>{
        btn.classList.remove('active');
    })

    if (event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    } else {
        event.target.classList.add('active');
    }

    selection = event.target.textContent;
    
}

