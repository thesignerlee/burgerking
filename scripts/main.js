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
const a = document.querySelectorAll('.campaign3 p a')
for(let i of a){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
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