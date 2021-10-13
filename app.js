 const textField = document.getElementById('textField');
 const result = document.getElementById('result');
 const submitBtn = document.getElementById('submitBtn');
 const result__show = document.querySelector('.result__show')

 


 submitBtn.addEventListener('click',function(e){
     e.preventDefault();
     const resultValue = parseInt(textField.value);
     result__show.style.display = 'block';
     if(resultValue>0 && resultValue<33){
         result.innerHTML="OPPs! You have failed."; 
         result__show.style.color = 'red';
     }
     else if(resultValue>33 && resultValue<=40){
         result.innerHTML="Your garde is D";
         result__show.style.color = 'green';  
     }
     else if(resultValue>40 && resultValue<=50){
         result.innerHTML="Your garde is C";
         result__show.style.color = 'green'; 
     }
     else if(resultValue>50 && resultValue<=60){
         result.innerHTML="Your garde is B"; 
         result__show.style.color = 'green'; 
     }
     else if(resultValue>60 && resultValue<=70){
         result.innerHTML="Your garde is A-";
         result__show.style.color = 'green';  
     }
     else if(resultValue>70 && resultValue<=79){
         result.innerHTML="Your garde is A";
         result__show.style.color = 'green';  
     }
     else if(resultValue>=80 && resultValue<=100){
         result.innerHTML="Your garde is A+";
         result__show.style.color = 'green';  
     }
     else{
         result.innerHTML="Please Enter Correct Marks"; 
          result__show.style.color = 'red';
     }
 })





 
