function unlock(){
let p=document.getElementById("pass").value.toLowerCase();
if(p==="komal"){
document.getElementById("gate").style.display="none";
document.getElementById("main").style.display="block";
}else alert("Wrong love password 😜");
}

function toggleTheme(){
document.body.classList.toggle("light");
}

let text = "My forever begins with you ❤️";
let i = 0;
let typingDiv = document.getElementById("typing");
function typing() {
    if (i < text.length) {
        typingDiv.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 220);
    }
}

typing();

// let startDate=new Date("july 27, 2020");
// setInterval(()=>{
// let diff=new Date()-startDate;
// let days=Math.floor(diff/(1000*60*60*24));
// loveTimer.innerHTML="💖 Loving you for "+days+" days";
// },1000);

function showPopup(){popup.style.display="block";}

function yes(){
alert("Komal, I feel something real with you. Happy Valentine's ❤️");
confettiBlast();

for(let i=0;i<30;i++){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="💘";
h.style.left="50vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),3000);
}
}

function moveNo(){
noBtn.style.left=Math.random()*300+"px";
noBtn.style.top=Math.random()*300+"px";
}

setInterval(()=>{
let h=document.createElement("div");
h.className="heart";
h.innerHTML="💖";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},300);

setInterval(()=>{
let s=document.createElement("div");
s.className="snow";
s.innerHTML="❄️";
s.style.left=Math.random()*100+"vw";
document.body.appendChild(s);
setTimeout(()=>s.remove(),6000);
},500);

document.addEventListener("click",(e)=>{
let f=document.createElement("div");
f.className="firework";
f.style.left=e.clientX+"px";
f.style.top=e.clientY+"px";
document.body.appendChild(f);
setTimeout(()=>f.remove(),1000);
});

function confettiBlast(){
for(let i=0;i<80;i++){
let c=document.createElement("div");
c.className="confetti";
c.style.left=Math.random()*100+"vw";
c.style.background=`hsl(${Math.random()*360},100%,50%)`;
document.body.appendChild(c);
setTimeout(()=>c.remove(),4000);
}}

document.addEventListener("mousemove",(e)=>{
let spark=document.createElement("div");
spark.innerHTML="✨";
spark.style.position="fixed";
spark.style.left=e.clientX+"px";
spark.style.top=e.clientY+"px";
spark.style.pointerEvents="none";
document.body.appendChild(spark);
setTimeout(()=>spark.remove(),600);
});

let music=document.getElementById("music");
function playMusic(){music.play();}
function pauseMusic(){music.pause();}
