let arr=["meditate.jpg","ball.jpg","music1.png",];
document.querySelector("div").style.display="flex";
document.querySelector("button").style.marginRight="20px";
document.querySelector("div").style.margin="20px";
document.querySelector(".div1").style.display="flex";
document.querySelector(".button1").style.marginRight="20px";
document.querySelector(".button1").style.paddingRight="30px";
document.querySelector(".div1").style.margin="20px";
document.querySelector(".button1").style.borderRadius="100%";
document.querySelector(".button1").style.border="none";

document.querySelector(".button1").style.height="60px";
document.querySelector(".button1").style.width="60px";
document.querySelector(".button1").style.backgroundColor="darkgreen";
document.querySelector(".button1").style.color="yellow";


let i=0;

function next(){
    
        
         i++;
         document.querySelector("img").src=arr[i];
         if(arr[i]===undefined){
            i=0;
            document.querySelector("img").src=arr[0];
         } 
     
        
}

function prev(){
  
      
      i--
      document.querySelector("img").src=arr[i];
      
      if(arr[i]===undefined){
            i=arr.length-1;
            document.querySelector("img").src=arr[arr.length-1];
         } 
    
}
let bool=true;
let a;
function play(){
      
      if(bool==true){
            a=setInterval(next,1000);
            bool=false;
            document.querySelector("strong").innerHTML="Pause";
            document.querySelector("strong").style.marginLeft="4px";
            document.querySelector(".button1").style.backgroundColor="purple";
      }
      else{
            
            a=clearInterval(a);
            bool=true;
            document.querySelector("strong").innerHTML="Play";
            document.querySelector("strong").style.marginLeft="10px";
            document.querySelector(".button1").style.backgroundColor="darkgreen";
      }
     


      }



      