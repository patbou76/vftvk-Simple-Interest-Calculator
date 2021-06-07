
// form validation / if ok call the compute function

function validateF() {
  var principalV = document.getElementById("principal").value;
  if (principalV == "" || principalV < "1") {
    alert("Please Enter a number greater or equal to 1");
    document.getElementById("principal").focus();
  }  else {

    compute();
  }
}
// Results of the interests amount calculation
function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var year = new Date().getFullYear()+parseInt(years);
var amount = interest + document.getElementById("principal").value;
var amountR = parseFloat(amount).toFixed(2);

   document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal
   +"$\</mark\>,\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of \<mark\>"
   +amountR+"$\</mark\>,\<br\>in the year "+year+"\<br\>"
    
}
        

// Slider for the interests rate
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}


