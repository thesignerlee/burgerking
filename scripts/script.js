$('.bg_h').hide()
$('.sub').hide()
$('nav').on('mouseover',()=>{
    $('.sub').stop(true).slideDown()
    $('.bg_h').stop(true).slideDown()
})
$('nav').on('mouseout',()=>{
    $('.sub').stop(true).slideUp()
    $('.bg_h').stop(true).slideUp()
})

const swiper1 = new Swiper('.swiper',{
    direction:'horizontal',
    autoplay:{delay:2000},
    loop:true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
})

const a = document.querySelectorAll('.campaign3 p a')
for(let i of a){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
    })
}