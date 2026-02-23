
const hamburger = document.querySelector(".hamburger-menu");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

const hireConfirmation = document.querySelector(".hire-confirmation");

const hireButton = document.querySelector(
  ".application-buttons button:first-child"
);

const cancelButton = document.querySelector(
  ".hire-confirmation .button-div button:first-child"
);

hireButton.addEventListener("click", () => {
  hireConfirmation.style.display = "flex";
});


cancelButton.addEventListener("click", () => {
  hireConfirmation.style.display = "none";
});

let messages = JSON.parse(localStorage.getItem("Messages")) || [];
let error = document.getElementById("error")
let HireButton = document.getElementById("hire-button")

HireButton.addEventListener('click',(e) => {
    e.preventDefault()
    let messenger = document.getElementById("text").value
    let phoneNumber = document.getElementById("phone_number").value
    let Email = document.getElementById("email").value
    let messageText = document.getElementById("text_area").value

    error.textContent = ""
    //validation ie check whether the fields empty

    if( !messenger){
      error.textContent = "name can`t be empty"
      console.log("name can`t be empty")
    }else if( !phoneNumber ){
       error.textContent = "phone number can`t be empty"
      console.log("number can`t be empty")
    }else if(!Email){
       error.textContent = "email can`t be empty"
      console.log("email can`t be empty")
    }else if( !messageText ){
       error.textContent = "message can`t be empty"
      console.log("message can`t be empty")
    }else{
      let message = {
        name: messenger,
        phoneNumber: phoneNumber,
        email:Email,
        Message: messageText
      }

      document.getElementById("formId").reset()
       console.log(message)
      messages.push(message)
      localStorage.setItem("Messages",JSON.stringify(messages))
    }

    
})