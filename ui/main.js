//counter code
var button = document.getElementById ('counter');
var counter=0;
button.onClick=function () {
  
  //make a request to the counter endpoint
  
  //capture the response and store it ina variable
  
  //render the variable in the correc span
  counter =counter+1;
  var span = document.getElementByid ('count');
  span.innerHTML=counter.toString();
  
    
};
