let ComputerWin = 0;
let UserWin = 0;
let Computer_move = '0';
let Usermove = '0';
let RockBtn = document.querySelector('#RockBtn');
let PaperBtn = document.querySelector('#PaperBtn');
let ScissorsBtn = document.querySelector('#ScissorsBtn');
let TieLabel = document.querySelector('#TieLabel');

RockBtn.addEventListener('click', () => {
    Usermove = 'Rock'
    ComputerMove();
    CheckMoves();
})

PaperBtn.addEventListener('click', () => {
    Usermove = 'Paper'
    ComputerMove();
    CheckMoves();
})

ScissorsBtn.addEventListener('click', () => {
    Usermove = 'Scissor'
    ComputerMove();
    CheckMoves();
})

function HideTieLable()
{
TieLabel.style.visibility = 'collapse'; 
}
function ComputerMove()
{
    let rand = Math.floor(Math.random() * 3)
    if (rand === 1)
        Computer_move = 'Rock';
    else if (rand === 2)
        Computer_move = 'Paper';
    else
        Computer_move = 'Scissor';
    
   
}

function CheckMoves()
{
if (Usermove === Computer_move)
    {
    TieLabel.style.visibility = 'visible'; 
    TieLabel.style.background = 'transparent'; 
    TieLabel.style.color = 'White'; 
    TieLabel.innerText = `It's a tie....`; 
    }

    else if (
        (Usermove === 'Rock' && Computer_move === 'Scissor') ||
        (Usermove === 'Scissor' && Computer_move === 'Paper') ||
        (Usermove === 'Paper' && Computer_move === 'Rock')
    ) {
        // User wins
    UserWin++;
    document.querySelector('#UserScore').innerText = `${UserWin}`;
      // if you want to show the Users wins also. int he tie label, uncomment the below line
    TieLabel.style.background = 'green'; 
    TieLabel.style.color = 'White'; 
    TieLabel.innerText = 'User Win....'; 
    TieLabel.style.visibility = 'visible'; 
 
} else {
    ComputerWin++;
    document.querySelector('#MachineScore').innerText = ComputerWin;
    // Computer wins
    // if you want to show the computer wins also. int he tie label, uncomment the below line
     TieLabel.style.background = 'lightpink'; 
    TieLabel.style.color = 'White'; 
    TieLabel.innerText = 'Computer Win....'; 
    TieLabel.style.visibility = 'visible'; 
          
    }


}