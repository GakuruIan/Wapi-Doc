const links=document.querySelectorAll('.nav-links > a');
const nav=document.querySelector('.nav');
let burger=document.querySelector('.hidden');
let navlinks=document.querySelector('.nav-links');
let burgers=document.querySelector('.burgers');
let times=document.querySelector('.times');
let isopen=false;
// scroll to a section 
links.forEach(item=>{
   item.addEventListener('click',(e)=>{
       e.preventDefault();
       if(isopen){
        navlinks.classList.remove('active');
        burgers.innerHTML='<i class="fa fa-bars hidden"></i>';
       }
      let navHeight= nav.getBoundingClientRect().height;
     let current=e.currentTarget;
     let attr=  current.getAttribute('href').slice(1);
     let element=document.getElementById(attr);
    let position=(element.offsetTop)-navHeight;
    window.scrollTo({
        left:0,
        top:position
    })
   })
})
//toggle menu
   burger.addEventListener("click",(e)=>{
    if(!navlinks.classList.contains('active')){
        burgers.innerHTML='<i class="fa fa-bars hidden"></i>';
        isopen=true;
    }else{
        burgers.innerHTML='<i class="fa fa-times times"></i>';
        isopen=false
    }
   })
burgers.onclick=(e)=>{
    let burg=e.currentTarget;
    if(!burg.classList.contains('active')){
        navlinks.classList.add('active');
        burgers.innerHTML='<i class="fa fa-times times"></i>';
        e.currentTarget.classList.add('active');
    }
    else{
        burgers.innerHTML='<i class="fa fa-bars hidden"></i>';
        navlinks.classList.remove('active');
        burg.classList.remove('active')
    }
}