//array of object creation 
let cardInfo = [
    {
        name:' - CravingHabit',
        image:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        text:'Every team wishes for a member as reliable and talented as you. Thanks for all that you do!',
    },
    {
        name:' - DeterminedShifter',
        image:'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text:'Thank you for your meticulous attention to detail on the budget report. Your thorough analysis helped us identify several key areas for cost savings. I’m sincerely grateful for your efforts.',
    },
    {
        name:' - GlossyMuzzle',
        image:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        text:'I want to thank you for your unwavering commitment to the customer service excellence initiative. Your suggestions for improving client interaction were invaluable. I deeply respect the energy and enthusiasm you bring to your work.',
    },
];

//accessing id's for DOM manipulation.
const userName = document.querySelector('#userName');
const userImg = document.querySelector('#userImg');
const userText = document.querySelector('#text');
let index=0;

//calling function to do its work
swap();
//function swap declaration
function swap(){
    userName.textContent=cardInfo[index].name;
    userImg.src=cardInfo[index].image;
    userText.textContent=cardInfo[index].text;
    index++;
    if(index==cardInfo.length){ // to make it infinite or loop
        index=0; // re-initialization 
    }

    //asynchronous concept of js
    // to work after 5 seconds or 5000ms
    setTimeout(()=>{
        swap();
    },5000);
}