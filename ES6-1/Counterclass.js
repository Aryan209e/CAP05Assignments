let display = document.getElementById('display')
let count = 0;
let counting = false;



function start(){
    if(counting == false){
 setCount =  setInterval(Updatecount,1000)
    display.textContent = count
    counting = true;
    }
    else{
        clearInterval(count);
        display.textContent = count;
    }
  
}

function Updatecount(){
if(counting== true){
    count++
    display.textContent = count
   
}
}

function incre(){
    count++;
    display.textContent = count;
    }
    
    function decre(){
        if(count >0){
        count--;
        display.textContent = count
    }
}