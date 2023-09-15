let active = document.querySelector('.active');
let cards = document.querySelectorAll('.card');

for(let card of cards)
{
    card.addEventListener('mouseover', ()=>
    {
        active.classList.remove('active');
        card.classList.add('active'); 
        active = card;
    })
}