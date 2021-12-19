const colors=["red","green","rgba(133,122,200)","f2f5f8"];
const hexColors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let clickMeBtn=document.querySelector("#click-me");
let bgvalue=document.querySelector("#bg-value");
let simpleBtn=document.querySelector("#simple-btn");
let hexBtn=document.querySelector("#hex-btn");
simpleBtn.addEventListener("click",function(){
    console.log("inside simple");
    function changeColor(){
        const changedColor=colors[randomNum()];
        console.log(changedColor)
        bgvalue.textContent=changedColor;
        document.body.style.backgroundColor=changedColor;
        
    }
    function randomNum(){
        return Math.floor((Math.random()*4));
    }
    clickMeBtn.addEventListener("click",changeColor);
    // console.log(randomNum());
});
hexBtn.addEventListener("click",function(){
    console.log("inside hex");
    function changeColor(){
        let changedColor="#";
        console.log("inside change hex");
        for(let i=1;i<=6;i++){
            changedColor+=hexColors[randomNum()];
        console.log(changedColor);

        }
        console.log(changedColor);
        bgvalue.textContent=changedColor;
        document.body.style.backgroundColor=changedColor;
    }    
    function randomNum(){
        return Math.floor(Math.random()*16);
    }
    clickMeBtn.addEventListener("click",changeColor);
});
for(let i=0;i<16;i++){
    console.log(hexColors[i]);
}