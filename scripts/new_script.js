$('.set').hide()
$('.title a:first-child').on('click',function(){
    $('.danpoom').css('display','block')
    $('.set').css('display','none')
    $('.title a').removeClass()
    $(this).addClass('active')
})
$('.title a:last-child').on('click',function(){
    $('.danpoom').css('display','none')
    $('.set').css('display','block')
    $('.title a').removeClass()
    $(this).addClass('active')
})
$('.title a:first-child').on('mouseover',function(){
    $('.title a').removeClass()
    $(this).addClass('active')
})
$('.title a:first-child').on('mouseout',function(){
    $('.title a').removeClass()
    $(this).addClass('active')
})
$('.title a:last-child').on('mouseover',function(){
    $('.title a').removeClass()
    $(this).addClass('active')
})
$('.title a:last-child').on('mouseout',function(){
    $('.title a').removeClass()
    $(this).addClass('active')
})