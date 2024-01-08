//Declaration
let buttons=document.querySelectorAll('.btn');
let btn1=document.getElementById("b1");
let btn2=document.getElementById("b2");
let btn3=document.getElementById("b3");
let btn4=document.getElementById("b4");
let btn5=document.getElementById("b5");
let btn6=document.getElementById("b6");
let btn7=document.getElementById("b7");
let btn8=document.getElementById("b8");
let btn9=document.getElementById("b9");
let l1=document.getElementById("load1");
let l2=document.getElementById("load2");
let t1=document.getElementById("turn1");
let t2=document.getElementById("turn2");
let e1=document.getElementById("e1");
let e2=document.getElementById("e2");
let point1=document.getElementById("point1");
let point2=document.getElementById("point2");
let pp1=0;
let pp2=0;
let clickaudio = new Audio();
clickaudio.src="click.mp3";
let startaudio = new Audio();
startaudio.src="start.mp3";
let decide=0;
let count=0;




//Target
buttons.forEach((btn)=>{
  
 btn.addEventListener("click",()=>{
  
 clickaudio.play();
 
   if(decide==0)
   {
 btn.innerText="×";
 decide=1;
 count++;
 btn.style.color="green";
 player1();
   }
   else{
 btn.innerText="o";
 decide=0;
 count++;
 btn.style.color="purple";
 player2();
  }
  btn.disabled = true;
  check();
  if(count==9){
  setTimeout(resetfun,1000);
  }
   e1.classList.remove("e1");
   e2.classList.remove("e2");
 })})
 
 
//Functions
function check(){
 if(btn1.innerText==btn2.innerText&& btn1.innerText==btn3.innerText&&(btn1.innerText=="o"||btn1.innerText=="×"))
  {
        btn1.style.background="yellow";
        btn2.style.background="yellow";
        btn3.style.background="yellow";
        setTimeout(resetfun,1000);
        if(btn1.innerText=="×") {
          pp1++;
        } else {
          pp2++;
        }
        windis();
}
  
   else if(btn4.innerText==btn5.innerText&&btn4.innerText==btn6.innerText&&(btn4.innerText=="o"||btn4.innerText=="×"))
 {
   
 
        btn4.style.background="yellow";
        btn5.style.background="yellow";
        btn6.style.background="yellow";
        setTimeout(resetfun,1000);
        if(btn4.innerText=="×") {
          pp1++;
        } else {
          pp2++;
        }
   windis();
 }
      
  
else if(btn7.innerText==btn8.innerText&&btn7.innerText==btn9.innerText&&(btn7.innerText=="o"||btn7.innerText=="×"))
  {
      
        btn7.style.background="yellow";
        btn8.style.background="yellow";
        btn9.style.background="yellow";
        setTimeout(resetfun,1000);
        if (btn7.innerText == "×") {
        pp1++;
       }       
       else {
       pp2++;
       }
       windis();
      }
 
 else if(btn1.innerText==btn4.innerText&& btn1.innerText==btn7.innerText&&(btn1.innerText=="o"||btn1.innerText=="×"))
  {
    
       
        btn1.style.background="yellow";
        btn4.style.background="yellow";
        btn7.style.background="yellow";
        setTimeout(resetfun,1000);
        if (btn1.innerText == "×") {
        pp1++;
       }       
       else {
       pp2++;
       }
       windis();
      }
  
  else if(btn2.innerText==btn5.innerText&& btn2.innerText==btn8.innerText&&(btn2.innerText=="o"||btn2.innerText=="×"))
  {
      
        btn2.style.background="yellow";
        btn5.style.background="yellow";
        btn8.style.background="yellow";
        setTimeout(resetfun,1000);
        if (btn2.innerText == "×") {
        pp1++;
       }       
       else {
       pp2++;
       }
       windis();
      }
      
  
  else if(btn3.innerText==btn6.innerText&& btn3.innerText==btn9.innerText&&(btn3.innerText=="o"||btn3.innerText=="×"))
  {
      
        btn3.style.background="yellow";
        btn6.style.background="yellow";
        btn9.style.background="yellow";
        setTimeout(resetfun,1000);
        if (btn3.innerText == "×") {
        pp1++;
       }       
       else {
       pp2++;
       }
       windis();
      }
 
  else if(btn1.innerText==btn5.innerText&& btn1.innerText==btn9.innerText&&(btn1.innerText=="o"||btn1.innerText=="×"))
  {
        
        btn1.style.background="yellow";
        btn5.style.background="yellow";
        btn9.style.background="yellow";
        setTimeout(resetfun,1000);
        if (btn1.innerText == "×") {
        pp1++;
       }       
       else {
       pp2++;
       }
       windis();
      }
  
  else if(btn3.innerText==btn5.innerText&& btn3.innerText==btn7.innerText&&(btn3.innerText=="o"||btn3.innerText=="×"))
  {
        
        btn3.style.background="yellow";
        btn5.style.background="yellow";
        btn7.style.background="yellow";
        setTimeout(resetfun,1000);
        if (btn3.innerText == "×") {
        pp1++;
       }       
       else {
       pp2++;
       }
       windis();
      }

}
function player1() {
 l2.classList.add("timer");
 l1.classList.remove("timer");
 t2.style.background="green";
 t1.style.background="white";
 t2.style.boxShadow="0 0 .7vw  .3vw";
 t1.style.boxShadow="none";

 
}
function player2() {
  
 l1.classList.add("timer");
 l2.classList.remove("timer");
 t1.style.background="green";
 t2.style.background="white";
 t1.style.boxShadow="0 0 .7vw  .3vw";
 t2.style.boxShadow="none";
 
}
function resetfun() {
  count=0;
  point1.innerText=pp1;
  point2.innerText=pp2;
  e1.classList.add("e1");
  e2.classList.add("e2");
  t1.style.background = "green";
  t2.style.background = "white";
  t1.style.boxShadow = "0 0 .7vw  .3vw";
  t2.style.boxShadow = "none";
  l1.classList.add("timer");
  l2.classList.remove("timer");
  setTimeout(empty,500);
   
}
function resetfun2() {
  pp1=0;
  pp2=0;
  e1.classList.remove("e1");
  e2.classList.remove("e2");
  setTimeout(resetfun,1);
   
}

function windis() {
for (let b of buttons){
     b.disabled = true;
}}
function empty() {
for(let b of buttons)
  {
    b.innerText=" ";
    b.style.background="white";
    b.disabled=false;
    decide=0;
    startaudio.play();
  }
}