let screen= document.getElementById('screen'); /*To get the screen*/
buttons = document.querySelectorAll('button'); /*To get all buttons*/
let screenValue = ''; /*Value inside the input*/
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText; /*Whenever a button is clicked we will get the text written on the button*/
        console.log('Button Text is ', buttonText)
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText; /*Button text is stored in screenValue and the value on the screen will be same as buttontext*/
            screen.value = screenValue; /*Explained in above line */
        }
        else if (buttonText == 'c'){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}