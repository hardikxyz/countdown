const dateform =document.querySelector('.dateform');
const showDateField = document.querySelector('#enteredDate');
var myinterval;
dateform.addEventListener('submit',(e)=>{
    e.preventDefault();   
    let date = new Date(document.querySelector('.getdate').value);
        clearInterval(myinterval);
        let now = new Date();
        let diff = (date - now) / 1000;
        if(Math.floor(diff)>0){
          myinterval=setInterval(()=>{
            let now = new Date();
            let diff = (date - now) / 1000;
            console.log(date + " now="+ now +"diff: "+ diff);
            showDateField.innerHTML=date
            document.querySelector('.days').value=Math.floor(diff / 3600 /24 );
            document.querySelector('.Hours').value= Math.floor(diff / 3600) % 24;
            document.querySelector('.Minute').value= Math.floor(diff / 60) % 60;
            document.querySelector('.Secound').value= Math.floor(diff) % 60;  
          },1000);
        }
       else{
        showDateField.innerHTML="Please pass any future date"
        document.querySelector('.days').value=0;
            document.querySelector('.Hours').value= 0;
            document.querySelector('.Minute').value=0;
            document.querySelector('.Secound').value= 0; 
       }
    
    
  
    

})  




