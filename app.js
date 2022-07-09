const images=document.getElementsByTagName("img")
const next= document.getElementById("next")
const prev= document.getElementById("prev")
// 
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let content=document.getElementById("content")
let imagesAll=document.getElementById("images")
// 
let lists=document.querySelectorAll("li");
[...lists].map((a)=>{
    a.addEventListener("click",()=>{
        if(document.querySelector(".showUl") ){
            document.querySelector(".showUl").classList.remove("showUl")
        }
        a.classList.add("showUl")
    })
})







let index=0
next.addEventListener("click",()=>{
    index++;
    if(index>images.length-1){
        index=0
    }
    document.getElementsByClassName("show")[0].classList.remove("show")
    images[index].classList.add("show")
})

prev.addEventListener("click",()=>{
    index--;
    if(index<0){
        index=images.length-1
    }
    document.getElementsByClassName("show")[0].classList.remove("show")
    images[index].classList.add("show")
})





btn1.addEventListener("click",()=>{
    content.classList.toggle("showAll")
    if(content.classList.value.includes("showAll")){
        btn1.innerText="Hide Content"
    }else{
        btn1.innerText="Show Content"
    }
    btn1.classList.toggle("hover")
})

btn2.addEventListener("click",()=>{
    imagesAll.classList.toggle("showAll")
    if(imagesAll.classList.value.includes("showAll")){
        btn2.innerText="Hide Images"
    }else{
        btn2.innerText="Show Images"
    }
    btn2.classList.toggle("hover1")

})