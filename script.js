const body = document.querySelector("body");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    if(body.classList.contains("light")){
        body.classList.remove("light");
        body.classList.add("dark")
    }
    else{
        body.classList.remove("dark");
        body.classList.add("light")
    }

    if(btn.classList.contains("light")){
        btn.classList.remove("light");
        btn.classList.add("dark")
    }
    else{
        btn.classList.remove("dark");
        btn.classList.add("light")
    }
})