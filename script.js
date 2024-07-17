function getcompchoice(){
    let i=Math.round((Math.random())*10);
    let compchoice;
    
    if(i%2===0)
        {
            compchoice="rock";
        }
    else if (i%3===0)
        {
            compchoice="paper";
        }
    else 
        {
            compchoice="scissors";
        }
    return compchoice;
}
console.log(getcompchoice());

function gethumanchoice(){
    let humanchoice=prompt("Choose- Rock, paper or scissors");
    if(humanchoice.toLowerCase()==="rock")
        {
            alert("You chose rock");
        }
    else if(humanchoice.toLowerCase()==="paper"){
        alert("You chose paper");

    }
    else if(humanchoice.toLowerCase()==="scissors"){
        alert("You chose scissors");
    }
    else{
        alert("Enter valid choice");
    }
    return humanchoice.toLowerCase();
}

let player_choice=gethumanchoice();
let computer_choice=getcompchoice();
if(player_choice===computer_choice)
    {
        alert("Its a tie");
    }
else if((player_choice==="rock")&&(computer_choice==="paper")){
    alert("Computer wins");
}
else if((player_choice==="rock")&&(computer_choice==="scissors")){
    alert("Player wins");
}
else if((player_choice==="paper")&&(computer_choice==="rock")){
    alert("Player wins");
}
else if((player_choice==="paper")&&(computer_choice==="scissors")){
    alert("Computer wins");
}
else if((player_choice==="scissors")&&(computer_choice==="paper")){
    alert("Player wins");
}
else if((player_choice==="scissors")&&(computer_choice==="rock")){
    alert("Computer wins");
}


