const ExtraButton= document.querySelector('.dots')
const sButtons= document.querySelector('.head-content')
const SignIn = document.querySelector('.signin');
const ZohoSignin = document.querySelector('.signin-zoho');
 
const FormInput = document.querySelector('.inputForm')
const InputText = document.querySelector('.input-text')
 
let testItem = document.querySelectorAll('.test-column');
let buttons = document.querySelectorAll('.dot')



FormInput.addEventListener('submit' , (e)=>{
    e.preventDefault();
    validateInput();
})


const validateInput =() =>{
    const userInputtext = InputText.value.trim();
    if(userInputtext === ""){
        setError(InputText , 'Please enter your email address or mobile number')
    }else if(!isValidEmail(userInputtext)){
        setError(InputText , 'please enter Valid Email')
    }else if(userInputtext.length < 10 ){
        setError(InputText , 'please enter Valid MobileNumber')
    }else{
        setSuccess(InputText)
    }
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    
   const setError = (Element , message) => {
        const inputControl = Element.parentElement;
        const errorDisplay = inputControl.querySelector('.error-text');

        errorDisplay.innerText = message;
        InputText.classList.add('error');
   }
   const setSuccess = (Element , message) => {
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-text');

    errorDisplay.innerText = '';
    InputText.classList.remove('error');
}



ExtraButton.addEventListener('click' , (e)=>{
    sButtons.classList.add('show')
    SignIn.classList.add('show')
})

ZohoSignin.addEventListener('click' , (e)=>{
    sButtons.classList.remove('show')
    SignIn.classList.remove('show')
})

 







var counter = 0;   

function switchTest(currentTest){
    currentTest.classList.add('active');
    var testId = currentTest.getAttribute('attr');

    if(testId > counter){
        testItem[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = testId;
        testItem[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(testId == counter ) {return ; }
    else{
        testItem[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = testId;
        testItem[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators()
}


function indicators(){
    for(i=0;i<buttons.length;i++){
        buttons[i].className = buttons[i].className.replace(' active', '');
    }
    buttons[counter].className += ' active';
}

function slideNext(){
    testItem[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= testItem.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    testItem[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}
function autoSliding(){
    deleteInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();
 