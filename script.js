const computerPlay = () => {
    const randomNumber = Math.round(Math.random()*30);

    if (randomNumber <= 10) {
        return 'Rock';
    } else if (randomNumber > 10 && randomNumber <= 20) {
        return 'Paper';
    } else if (randomNumber > 20) {
        return 'Scissors';
    } else {
        return 'Something\'s wrong';
    };

};

const humanPlayerInput = () => {
    input = prompt('Enter your selection!').trim();

    return input;
};

const playRound  = (playerSelection, computerSelection) => {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    let result;
    let playerScore = 0;
    let computerScore = 0;

    if (player === 'rock') {
        switch (computer) {
            case 'rock':
                result = 'No one wins this round.';
                break;
            case 'paper':
                result = 'Paper beats rock. Computer wins!';
                computerScore++;
                break;
            case 'scissors':
                result = 'Rock beats scissors. You win!';
                playerScore++;
                break;
        };
    } else if (player === 'paper') {
        switch (computer) {
            case 'rock':
                result = 'Paper beats rock. You wins!';
                playerScore++;
                break;
            case 'paper':
                result = 'No one wins this round.';
                break;
            case 'scissors':
                result = 'Scissors beat paper. Computer wins!';
                computerScore++;
                break;

        };
    } else if (player === 'scissors') {
        switch (computer) {
            case 'rock':
                result = 'Rock beats scissors. Computer wins';
                computerScore++;
                break;
            case 'paper':
                result = 'Scissors beat paper. You wins!';
                playerScore++;
                break;
            case 'scissors':
                result = 'No one wins this round.';
                break;
        };
    } else {
        return 'Error. Check for spelling mistakes and refresh.';
    };

    let message = `Your selected ${playerSelection} and computer selected ${computerSelection}. The results: ${result}`

    return {
        message: message,
        playerScore: playerScore,
        computerScore: computerScore,
    };
  
};


const game = () => {
    let playerTotalScore = 0;
    let computerTotalScore = 0;

    for (let i = 0 ; i < 5 ; i++) {
        const playerSelection = humanPlayerInput();
        const computerSelection = computerPlay();

        const playRoundResults = playRound(playerSelection, computerSelection);

        // console.log(playRoundResults);

       if (playRoundResults.playerScore === undefined) {
        console.log(playRoundResults);
        return;
       }
        
        playerTotalScore += playRoundResults.playerScore;
        computerTotalScore += playRoundResults.computerScore;

        console.log(playRoundResults.message)
    }

    const winner = playerTotalScore>computerTotalScore? 'You!' : 'Computer!';

    let finalScoresMessage = `Player total score: ${playerTotalScore}, Computer total score: ${computerTotalScore}. The winner is ${winner}`
    
    console.log(finalScoresMessage);
};

game();

