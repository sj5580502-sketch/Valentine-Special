let text="Komal, you are my forever and my always ❤️";
let i=0;
function typing(){
 if(i<text.length){
  document.getElementById("typing").innerHTML+=text.charAt(i);
  i++;
  setTimeout(typing,100);
 }
}
typing();

/* Theme */
function toggleTheme(){
 document.body.classList.toggle("light");
}

/* Popup */
function showPopup(){
 popup.style.display="block";
}

/* Yes */
function yes(){
 alert("Yesss 😍 I love you Komal ❤️");
 confettiBlast();
}

/* Moving NO */
function moveNo(){
 noBtn.style.left=Math.random()*300+"px";
 noBtn.style.top=Math.random()*300+"px";
}

/* 3D Hearts */
setInterval(()=>{
 let h=document.createElement("div");
 h.className="heart";
 h.innerHTML="💖";
 h.style.left=Math.random()*100+"vw";
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),6000);
},300);

/* Snowfall */
setInterval(()=>{
 let s=document.createElement("div");
 s.className="snow";
 s.innerHTML="❄️";
 s.style.left=Math.random()*100+"vw";
 document.body.appendChild(s);
 setTimeout(()=>s.remove(),6000);
},500);

/* Fireworks */
document.addEventListener("click",(e)=>{
 let f=document.createElement("div");
 f.className="firework";
 f.style.left=e.clientX+"px";
 f.style.top=e.clientY+"px";
 document.body.appendChild(f);
 setTimeout(()=>f.remove(),1000);
});

/* Confetti */
function confettiBlast(){
 for(let i=0;i<80;i++){
  let c=document.createElement("div");
  c.className="confetti";
  c.style.left=Math.random()*100+"vw";
  c.style.background="hsl("+Math.random()*360+"deg,100%,50%)";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),4000);
 }
}

/* Music */
let music=document.getElementById("music");
function playMusic(){music.play();}
function pauseMusic(){music.pause();}