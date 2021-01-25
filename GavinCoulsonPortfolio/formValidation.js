const contactForm = document.getElementById("myForm");
const submitBtn = document.getElementById("submitBtn");
const required_input = document.querySelectorAll(".required")
contactForm.addEventListener("submit", preventReset);
contactForm.addEventListener("click", enableSubmit);

submitBtn.disabled=true;

function enableSubmit(){
  console.log(submitBtn.disabled);
  for(let i = 0; i < required_input.length; i++){
    if(required_input[i].value === ''){
      submitBtn.disabled=true;
      submitBtn.style.color = "red";
      return;
    }else if(required_input[i].length != ''){
      submitBtn.disabled=false;
      submitBtn.style.color = "green";
    }
  }
  }

function preventReset(e){
  e.preventDefault();
}


function printInformationToLog(){
    var firsttName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var yourEmail = document.getElementById("yourEmail").value;
    var yourPhoneNumber = document.getElementById("yourPhoneNumber").value;
    var yourMessage = document.getElementById("yourMessage").value;
    var gameOfThrones = document.getElementById("horns").value;
    console.log("First Name: " + firsttName);
    console.log("Last Name: " + lastName);
    console.log("Inputted Email: " + yourEmail);
    console.log("Inputted Phone Number: " + yourPhoneNumber);
    console.log("Message: " + yourMessage);
  }