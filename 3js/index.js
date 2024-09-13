const button = document.querySelector('button');
const result = document.querySelector('#result');
const bmiText = document.querySelector('#bmiText');

button.addEventListener('click',()=>{
    const height=document.querySelector('#height').value / 100;
    const weight=document.querySelector('#Weight').value;
    if(height=='' || weight=='')
        alert('enter something here');
    calculate(height,weight);
});

let bmi,text;
function calculate(height,weight){
    bmi = weight/(height**2);
    bmi=bmi.toFixed(2);
    if(bmi < 18.5)
        text='underweight!!';
    else if(bmi >= 18.5 && bmi <=24.9)
        text='normal weight';
    else if(bmi >= 25 && bmi <=29.9)
        text='over weight';
    else if(bmi >= 30)
        text='obese!!';

    result.value=bmi;
    bmiText.innerHTML=text;
}