const navSlide = () => {
 const ham = document.querySelector('.ham');
 const nav = document.querySelector('.links');

 ham.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
 });
}

navSlide();

var monthlySalary = 0;
var minSavings = 0;
var expenditure = 0;

document.querySelector('#submitms').addEventListener('click' , function() {
 var temp = document.getElementById('salary').value;
 monthlySalary = parseInt(temp);
 minSavings = (monthlySalary*20)/100;
});

document.querySelector('#enter').addEventListener('click' , function() {
 var temp1 = document.getElementById('spendings').value;
 expenditure = expenditure + parseInt(temp1);
 if(expenditure > (monthlySalary-minSavings))
 {
  alert("Oops! You have spent too much. You should focus on saving now.");
  expenditure = 0;
  document.getElementById('display').value = "";
  document.getElementById('salary').value = "";
  document.getElementById('spendings').value = "";
 }
 else
 {
  document.getElementById('spendings').value = "";
  document.getElementById('display').value = expenditure;
 }
});