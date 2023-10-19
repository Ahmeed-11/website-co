const menu = document.querySelector(".nav-mb")
const mobileNav = document.querySelector(".menu")
const lies = document.querySelectorAll(".menu ul li")
const facebook = document.querySelector(".facebook")
facebook.onclick= ()=>{
    location.assign("facebook.com")
}
console.log(lies)
lies.forEach(ele=>{
    ele.onclick= ()=>{
        mobileNav.style.cssText = "left:100%;transition:0.7s"
        menu.classList.toggle("clicked")
    }
})
menu.onclick= ()=>{
    menu.classList.toggle("clicked")
    
    if(menu.classList.contains("clicked")){
        mobileNav.style.cssText = "left:0%;transition:0.7s"
    }else{
        mobileNav.style.cssText = "left:100%;transition:0.7s"
    }

}