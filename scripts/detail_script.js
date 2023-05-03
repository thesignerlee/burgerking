const btn_d = document.querySelectorAll('main > ul > li > .click')
const active_d = document.querySelectorAll('main > ul > .active')
console.log(btn_d, active_d)
$('main > ul > li > a:nth-child(1)').on(
    'click',()=>{
        $('main > ul > .active:nth-child(1)').css('display','block')
    }
)
let a = true
btn_d.forEach((i, index)=>{
    console.log(i,index)
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        if(a == true){
            for(let i of active_d){
                i.style.display = 'none'
            }
            active_d[index].style.display = 'block'
            a = false
        }else{
            for(let i of active_d){
                i.style.display = 'none'
            }
            active_d[index].style.display = 'none'
        a = true
        }
    })
})