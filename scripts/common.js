// $('.bg_h').hide()
// $('.sub').hide()
// $('nav').on('mouseover',()=>{
//     $('.sub').stop(true).slideDown()
//     $('.bg_h').stop(true).slideDown()
// })
// $('nav').on('mouseout',()=>{
//     $('.sub').stop(true).slideUp()
//     $('.bg_h').stop(true).slideUp()
// })
// $('.ham').on('click',(e)=>{
//     e.preventDefault()
//     $('.nav_m').show()
// })
// $('.nav_m > ul > li').on('click',()=>{
//     $('.nav_m .sub').stop(true).slideDown()
//     $('.nav_m .bg_nav_m').stop(true).slideDown()
// })
// $('.nav_m > ul > li:nth-child(1)').on('click',()=>{
//     $('.nav_m .sub:nth-child(1)').stop(true).slideUp()
//     $('.nav_m .bg_nav_m').stop(true).slideUp()
// })
const sub_header = document.querySelectorAll('.h_right nav .sub')
const nav_header = document.querySelector('.h_right nav')
const bg_h_header = document.querySelector('header .bg_h')

bg_h_header.style.height = 0
for(let i of sub_header){
    i.style.display = 'none'
}
nav_header.addEventListener('mouseover',()=>{
    for(let i of sub_header){
        i.style.display = 'block'
    }
    bg_h_header.style.height = '300px'
    bg_h_header.style.transition = 'all 0.5s'
})
nav_header.addEventListener('mouseout',()=>{
    for(let i of sub_header){
        i.style.display = 'none'
    }
    bg_h_header.style.height = '0'
    bg_h_header.style.transition = 'all 0.5s'
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

// 내비게이션 모바일 메뉴
// 데이터 변수 하나를 추가해서 true false 조정할 수 있게 만들기
let bol = true
const hamburger = document.querySelector('.hamburger')
const m_nav = document.querySelector('header .nav_m ')
const nav_m_li = document.querySelectorAll('.h_right .nav_m ul li')
const nav_m_sub = document.querySelectorAll('.h_right .nav_m ul li .sub')
console.log(m_nav)
//클릭
hamburger.addEventListener('click',()=>{
    if(bol==true){
        //메뉴열림
            m_nav.style.display = 'block'
        bol=false
    }else{
        //메뉴닫기
            m_nav.style.display = 'none'
        bol=true
    }
})
for(let i of nav_m_sub){
    i.style.display = 'none'
}
//m_nav a 의 모든 변수
const m_nav_a = document.querySelectorAll('.nav_m > ul > li > a')
console.log(m_nav_a)
let bool = true
for(let i of m_nav_a){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log(i)
        console.log(i.nextElementSibling)
        if(bool==true){
            for(let j of m_nav_a){
                    j.nextElementSibling.style.display = 'none'
            }
            i.nextElementSibling.style.display ='block'
            bool=false
        }else{
            for(let j of m_nav_a){
                j.nextElementSibling.style.display = 'none'
        }
        i.nextElementSibling.style.display ='none'
        bool=true
        }
    })
}
// $('.ham').on('click',(e)=>{
//     e.preventDefault()
//     $('.nav_m').show()
// })
// $('.nav_m > ul > li').on('click',()=>{
//     $('.nav_m .sub').stop(true).slideDown()
//     $('.nav_m .bg_nav_m').stop(true).slideDown()
// })
// $('.nav_m > ul > li:nth-child(1)').on('click',()=>{
//     $('.nav_m .sub:nth-child(1)').stop(true).slideUp()
//     $('.nav_m .bg_nav_m').stop(true).slideUp()
// })